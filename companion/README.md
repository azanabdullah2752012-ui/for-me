# FOR ME — macOS Activity Companion (Transparent Activity Telemetry)

## Architectural Principles & User Corrections

1. **Transparency over Private Daemons**:
   - macOS does **not** provide supported public APIs to read Apple's private historical Screen Time SQL databases (`knowledgeC.db` / `DeviceActivity`).
   - This companion implements **transparent, supported active window observation** using standard macOS APIs (`System Events` / `NSWorkspace` foreground processes).
   - Collected metrics are explicitly presented as **Local Active App Telemetry**, never misrepresented as Apple's proprietary Screen Time daemon data.

2. **Zero Dependencies & Zero Battery Drain**:
   - Written in standard Python 3 utilizing native macOS JXA/AppleScript bridge.
   - Low-frequency sampling (every 5 seconds) consumes < 0.1% CPU.

3. **Conflict-Safe Idempotent Data Exchange**:
   - Generates deterministic stable IDs: `mac_act_{date}_{bundle_or_app_name}`.
   - Outputs to `companion/for_me_companion_inbox.json`.
   - The web application ingests entries without overwriting manual notes or duplicate time logs.

## Usage

```bash
# 1. Sample foreground application once:
./companion/run_companion.sh --once

# 2. View current active day summary:
./companion/run_companion.sh --status

# 3. Run continuously as a background companion:
./companion/run_companion.sh
```
