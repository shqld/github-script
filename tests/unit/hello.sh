#! /bin/bash

set -euo pipefail

time node -r . tests/unit/b.ts

time tsx tests/unit/ci.ts
