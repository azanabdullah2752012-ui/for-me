# FOR ME — Student Portal Synchronization Automation

## Architecture & Guarantees

1. **Scheduled Daily at 5:00 PM IST (17:00 local time)**:
   - Configured via macOS user-level daemon (`launchd`).
   - Plist: `com.forme.portal.sync.plist` registered in `~/Library/LaunchAgents/`.

2. **Sleep & Missed Execution Catch-Up**:
   - macOS `launchd` skips calendar intervals if the Mac is sleeping or closed at 17:00.
   - When the script runs or the Mac wakes, `portal_sync.py` inspects `state/portal_sync_state.json`.
   - If today's sync was missed, it performs an automatic catch-up sync within the configured catchup window.

3. **Authentication Expiry Safeguard**:
   - Compares token expiration against current UTC time before dispatching requests.
   - If expired, cleanly aborts and signals `auth_expired` rather than hammering endpoints and triggering account locks.

4. **Network Resilience & Backoff**:
   - 3 retries with exponential backoff (2s, 4s, 8s).
   - If offline or unreachable, outputs formatted verified sync payload for ingestion.

5. **Conflict-Safe Idempotent Output**:
   - Writes to `outbox/portal_marks_sync.json` with stable record IDs (`portal_{subjectId}_{code}`).
   - The FOR ME Markbook imports these assessments using deterministic merging, preventing duplicate teacher entries while preserving all personal manual records.
