#!/usr/bin/env bash
# FOR ME — Safe macOS launchd Installer & Validator
set -e

PLIST_NAME="com.forme.portal.sync.plist"
SOURCE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
TARGET_DIR="$HOME/Library/LaunchAgents"
TARGET_PLIST="$TARGET_DIR/$PLIST_NAME"

echo "🎓 Installing FOR ME Student Portal Sync Agent (Scheduled 5:00 PM IST)..."

mkdir -p "$TARGET_DIR"
mkdir -p "$SOURCE_DIR/logs"
mkdir -p "$SOURCE_DIR/state"
mkdir -p "$SOURCE_DIR/outbox"

# Unload previous service if loaded
if launchctl list | grep -q "com.forme.portal.sync"; then
    echo "   Stopping previous launchd job..."
    launchctl unload "$TARGET_PLIST" 2>/dev/null || true
fi

# Copy plist to ~/Library/LaunchAgents
cp "$SOURCE_DIR/$PLIST_NAME" "$TARGET_PLIST"
chmod 644 "$TARGET_PLIST"

# Load the agent
launchctl load "$TARGET_PLIST"

echo "✔ Agent successfully registered with launchd."
echo "✔ Schedule: Daily at 17:00 (5:00 PM IST)."
echo "✔ Logs: $SOURCE_DIR/logs/launchd_stdout.log"
echo "✔ Outbox: $SOURCE_DIR/outbox/portal_marks_sync.json"
