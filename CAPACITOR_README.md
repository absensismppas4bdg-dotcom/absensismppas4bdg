Capacitor integration - quick scaffold & plugin examples

Goal
- Guide to scaffold Capacitor for Android/iOS and example plugin configuration (Push).

Prerequisites
- Node.js (16+), npm
- Android Studio + SDK (for Android builds)
- Xcode + Apple Developer account (for iOS builds)
- (Optional) Firebase project for Push (FCM)

Quick start
1. Install Capacitor (if not already):
   npm install --save @capacitor/core @capacitor/cli

2. Initialize Capacitor in project root (update ids/names):
   npx cap init "SMP Pasundan 4 - Absensi" com.yourschool.absensi --web-dir="."

3. Add platforms:
   npx cap add android
   npx cap add ios

4. Copy web assets into native projects after any web change:
   npx cap copy

5. Open native IDEs:
   npx cap open android  # Android Studio
   npx cap open ios      # Xcode

Push / Notifications (example with Firebase/FCM)
- Add Firebase to both platforms per Firebase docs.
- Install Capacitor Push plugin (example using community plugin):
  npm i @capacitor/push

- Android: configure `google-services.json` and update `AndroidManifest.xml` per plugin docs.
- iOS: configure APNs certificate / push capabilities in Xcode and add GoogleService-Info.plist.

Useful commands
- npx cap sync   # copy + update native platforms
- npx cap copy
- npx cap open android
- npx cap open ios

Notes & tips
- For app-specific behavior (e.g., white-screen at launch), configure `capacitor.config.json` and platform launch screens.
- For background sync or advanced features, consider implementing native bridge code or using community plugins.

If you'd like, I can:
- run `npx cap add` / `npx cap open` in the workspace to scaffold platforms (if environment supports), or
- generate example native code changes (e.g., Android manifest snippet, iOS entitlements) for you to apply locally.