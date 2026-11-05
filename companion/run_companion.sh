#!/usr/bin/env bash
# FOR ME — Companion Launcher
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
python3 "$DIR/macos_activity_tracker.py" "$@"
