#! /bin/bash
set -euo pipefail

node -r . tests/unit/b.ts > /dev/null
