Mobile packaging & publishing guide — Capacitor (Android/iOS), TWA (Android), and App Store notes

Overview
- This project is already PWA-ready (manifest, service worker, install prompt).
- This guide gives practical commands and minimal config templates to:
  1. Wrap the PWA with Capacitor for Android and iOS (recommended)
  2. Create a Trusted Web Activity (TWA) for Play Store quick packaging
  3. Notes on publishing to Play Store and App Store

Prerequisites
- Node.js (16+)
- Java JDK + Android Studio for Android builds
- Xcode + Apple Developer account for iOS builds
- Android keystore for signing
- A secure hosting URL (HTTPS) if using TWA or serving remote content

A. Capacitor (recommended)
1) Install Capacitor in project root:
   npm init -y
   npm install --save @capacitor/core @capacitor/cli

2) Initialize Capacitor (replace package details):
   npx cap init absensi "com.yourschool.absensi" --web-dir="."

3) Build web assets and add native platforms:
   npm run build   # if you have a build step; otherwise ensure index.html is ready
   npx cap add android
   npx cap add ios

4) Open projects:
   npx cap open android   # opens Android Studio
   npx cap open ios       # opens Xcode

5) Add plugins (optional):
   npm install @capacitor/push
   # configure FCM/APNs for push notifications

6) Test on device/emulator and follow platform steps to sign and publish.

Notes:
- Capacitor copies your web files into native projects under android/ and ios/ directories.
- Use `npx cap copy` after web changes, then `npx cap open android` to run.

B. Trusted Web Activity (TWA) — Android Play Store
1) Install Bubblewrap (run on Node environment):
   npm i -g @bubblewrap/cli

2) Create a TWA project and build:
   bubblewrap init --manifest=https://your-app-url/manifest.json
   bubblewrap build

3) Open generated Android project in Android Studio, edit signing, and publish the generated AAB.

C. PWABuilder (alternate)
- Use https://www.pwabuilder.com/ to generate platform wrappers and store packages.

D. Publishing Notes
- Play Store (Android): AAB preferred; must meet Play policies. TWA or Capacitor both work.
- App Store (iOS): Apple prefers native apps. Use Capacitor (with native features) to avoid rejections. Requires Apple Developer subscription.

E. Quick checklist for store readiness
- App icons (192 & 512), screenshots, privacy policy URL, support/contact URL
- Proper deep links / app-URLs configured
- App name, short description, and store listing metadata prepared

Templates included in this repo:
- `manifest.json` (already added)
- `service-worker.js` (already added)
- `capacitor.config.json` (template provided)

If you want, I can scaffold a `package.json` with helpful scripts, add a `capacitor.config.json` template, and optionally create an example Bubblewrap config. Tell me which you'd like generated now.