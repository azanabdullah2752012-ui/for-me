#!/usr/bin/env python3
"""
FOR ME — macOS Foreground Activity Companion
============================================
Architecture:
- Transparent active window telemetry using standard macOS APIs (System Events / NSWorkspace).
- Explicitly distinct from Apple's private, closed Screen Time daemon database.
- Samples the active foreground application, computes active duration, and categorizes
  sessions into Productive, Neutral, or Unproductive.
- Outputs conflict-safe, idempotent JSON with stable deterministic IDs.
- Designed with zero third-party dependencies (works directly on stock macOS Python 3.9+).
"""

import sys
import os
import json
import time
import subprocess
from datetime import datetime, date

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CATEGORIES_FILE = os.path.join(BASE_DIR, "categories.json")
INBOX_FILE = os.path.join(BASE_DIR, "for_me_companion_inbox.json")
STATE_FILE = os.path.join(BASE_DIR, "tracker_state.json")

def load_categories():
    if os.path.exists(CATEGORIES_FILE):
        try:
            with open(CATEGORIES_FILE, 'r') as f:
                return json.load(f)
        except Exception:
            pass
    return {
        "classifications": {
            "productive": {"bundles": [], "appNames": ["Cursor", "Code", "Terminal", "Obsidian", "Antigravity"]},
            "neutral": {"bundles": [], "appNames": ["Finder", "System Settings", "Preview"]},
            "unproductive": {"bundles": [], "appNames": ["Steam", "Discord", "Music"]}
        }
    }

def get_frontmost_app():
    """
    Returns (app_name, bundle_id) of the current foreground application.
    Uses JXA (JavaScript for Automation) via osascript — 100% stock macOS compatible.
    """
    jxa_script = """
    (function() {
        try {
            var sys = Application("System Events");
            var procs = sys.applicationProcesses.whose({frontmost: true});
            if (procs.length > 0) {
                var p = procs[0];
                var name = p.name();
                var bundle = "";
                try { bundle = p.bundleIdentifier() || ""; } catch(e) {}
                return JSON.stringify({name: name, bundle: bundle});
            }
        } catch(e) {}
        return JSON.stringify({name: "Unknown", bundle: ""});
    })()
    """
    try:
        proc = subprocess.run(
            ["osascript", "-l", "JavaScript", "-e", jxa_script],
            capture_output=True,
            text=True,
            timeout=2.0
        )
        if proc.returncode == 0 and proc.stdout.strip():
            data = json.loads(proc.stdout.strip())
            return data.get("name", "Unknown"), data.get("bundle", "")
    except Exception as e:
        # Fast fallback to AppleScript
        try:
            as_proc = subprocess.run(
                ["osascript", "-e", 'tell application "System Events" to get name of first application process whose frontmost is true'],
                capture_output=True,
                text=True,
                timeout=1.5
            )
            if as_proc.returncode == 0:
                name = as_proc.stdout.strip()
                return name, ""
        except Exception:
            pass
    return "Unknown", ""

def classify_app(app_name, bundle_id, categories):
    classifications = categories.get("classifications", {})
    
    # Check bundle ID first
    if bundle_id:
        for cat_key, cat_data in classifications.items():
            if bundle_id in cat_data.get("bundles", []):
                return cat_key
                
    # Check app name
    for cat_key, cat_data in classifications.items():
        for name in cat_data.get("appNames", []):
            if name.lower() in app_name.lower():
                return cat_key
                
    return "neutral"

def load_tracker_state():
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, 'r') as f:
                return json.load(f)
        except Exception:
            pass
    return {
        "today": str(date.today()),
        "active_seconds_by_app": {},
        "app_categories": {},
        "last_sample_time": time.time()
    }

def save_tracker_state(state):
    tmp = STATE_FILE + ".tmp"
    with open(tmp, 'w') as f:
        json.dump(state, f, indent=2)
    os.replace(tmp, STATE_FILE)

def export_inbox_payload(state, categories):
    today = state.get("today", str(date.today()))
    active_by_app = state.get("active_seconds_by_app", {})
    app_categories = state.get("app_categories", {})

    logs = []
    total_productive_mins = 0
    total_neutral_mins = 0
    total_unproductive_mins = 0

    # Group into discrete time log entries
    for app_name, seconds in active_by_app.items():
        mins = max(1, round(seconds / 60))
        cat = app_categories.get(app_name, "neutral")
        
        if cat == "productive":
            total_productive_mins += mins
        elif cat == "neutral":
            total_neutral_mins += mins
        else:
            total_unproductive_mins += mins

        # Deterministic stable ID: mac_act_{date}_{clean_app_name}
        clean_name = "".join(c for c in app_name if c.isalnum() or c in ('_', '-')).lower()
        log_id = f"mac_act_{today}_{clean_name}"
        
        logs.append({
            "id": log_id,
            "date": today,
            "timestamp": datetime.now().isoformat(),
            "activityName": f"{app_name} (Active Focus)",
            "category": cat,
            "durationMinutes": mins,
            "notes": f"Recorded via macOS Active Window Telemetry ({mins}m)"
        })

    payload = {
        "metadata": {
            "source": "macOS Transparent Foreground Activity Tracker",
            "telemetryType": "active_window_observation",
            "isAppleScreenTimePrivateDaemon": False,
            "transparencyNotice": "Observed via macOS System Events/NSWorkspace active foreground process. Transparent and user-auditable.",
            "generatedAt": datetime.now().isoformat(),
            "date": today
        },
        "summary": {
            "productiveMinutes": total_productive_mins,
            "neutralMinutes": total_neutral_mins,
            "unproductiveMinutes": total_unproductive_mins,
            "totalActiveMinutes": total_productive_mins + total_neutral_mins + total_unproductive_mins,
            "activeAppCount": len(active_by_app)
        },
        "logs": logs
    }

    tmp = INBOX_FILE + ".tmp"
    with open(tmp, 'w') as f:
        json.dump(payload, f, indent=2)
    os.replace(tmp, INBOX_FILE)
    return payload

def run_sample_step(state, categories, elapsed_seconds=5):
    current_date = str(date.today())
    if state.get("today") != current_date:
        # Rollover to new day
        state = {
            "today": current_date,
            "active_seconds_by_app": {},
            "app_categories": {},
            "last_sample_time": time.time()
        }

    app_name, bundle_id = get_frontmost_app()
    if app_name and app_name != "Unknown":
        cat = classify_app(app_name, bundle_id, categories)
        active_by_app = state.setdefault("active_seconds_by_app", {})
        active_by_app[app_name] = active_by_app.get(app_name, 0) + elapsed_seconds
        state.setdefault("app_categories", {})[app_name] = cat

    state["last_sample_time"] = time.time()
    save_tracker_state(state)
    return state, app_name

def main():
    categories = load_categories()
    state = load_tracker_state()

    if "--once" in sys.argv:
        print("🔍 Sampling frontmost application once...")
        state, app_name = run_sample_step(state, categories, elapsed_seconds=60)
        payload = export_inbox_payload(state, categories)
        print(f"✔ Frontmost App: {app_name}")
        print(f"✔ Logged {len(payload['logs'])} active applications into {INBOX_FILE}")
        print(f"✔ Productive: {payload['summary']['productiveMinutes']}m | Neutral: {payload['summary']['neutralMinutes']}m | Leakage: {payload['summary']['unproductiveMinutes']}m")
        return

    if "--status" in sys.argv:
        today = state.get("today", str(date.today()))
        active = state.get("active_seconds_by_app", {})
        print(f"📊 FOR ME macOS Activity Tracker Status for {today}:")
        for app, secs in sorted(active.items(), key=lambda x: x[1], reverse=True):
            mins = round(secs / 60, 1)
            cat = state.get("app_categories", {}).get(app, "neutral")
            print(f"   • {app:<25} {mins:>5.1f} mins ({cat})")
        return

    print("🚀 Starting FOR ME macOS Activity Companion (Transparent Foreground Sampling)...")
    print("   Press Ctrl+C to stop.")
    try:
        sample_interval = 5.0
        while True:
            time.sleep(sample_interval)
            state, app = run_sample_step(state, categories, elapsed_seconds=int(sample_interval))
            # Export payload every 30 seconds
            if int(time.time()) % 30 < sample_interval:
                export_inbox_payload(state, categories)
    except KeyboardInterrupt:
        print("\nStopping activity tracker and exporting final session payload...")
        export_inbox_payload(state, categories)
        print("✔ Final sync payload written to for_me_companion_inbox.json.")

if __name__ == "__main__":
    main()
