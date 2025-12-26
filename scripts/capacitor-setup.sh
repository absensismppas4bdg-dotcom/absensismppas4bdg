#!/usr/bin/env bash
set -e

echo "This script bootstraps Capacitor platforms (requires Node, npx, Android Studio/Xcode installed)"

if ! command -v npx >/dev/null 2>&1; then
  echo "npx is required; please install Node.js"
  exit 1
fi

# Initialize Capacitor (only if not initialized)
if [ ! -f capacitor.config.json ]; then
  echo "capacitor.config.json not found — creating a basic template"
  cat > capacitor.config.json <<'JSON'
{
  "appId": "com.yourschool.absensi",
  "appName": "Absensi SMP Pasundan 4",
  "webDir": ".",
  "bundledWebRuntime": false
}
JSON
fi

# Add platforms
npx cap add android || echo "android may already be added"
npx cap add ios || echo "ios may already be added"

echo "Done. Use 'npx cap open android' or 'npx cap open ios' to continue in native IDEs."