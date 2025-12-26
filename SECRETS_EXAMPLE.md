Secrets & credentials needed for CI and app signing

Store these securely in your GitHub repository's Secrets (Settings → Secrets & variables → Actions). Example secret names and contents:

Android (Play Store / CI)
- ANDROID_KEYSTORE_BASE64: Base64-encoded keystore file (use `base64 your_keystore.jks > keystore.b64`)
- ANDROID_KEYSTORE_PASSWORD: Keystore password
- ANDROID_KEY_ALIAS: Key alias in the keystore
- ANDROID_KEY_PASSWORD: Password for the key alias
- GOOGLE_PLAY_SERVICE_ACCOUNT: JSON content of Google Play service account (base64-encoded or stored as a secret file)

iOS (App Store / CI)
- MATCH_PASSWORD: Fastlane Match password (if using match for code signing)
- APPLE_APP_SPECIFIC_PASSWORD: App-specific password for notarization / uploads (if required)
- APPLE_CERT_BASE64: (optional) base64-encoded signing certificate
- APPLE_PROV_PROFILE_BASE64: (optional) base64-encoded provisioning profile

Fastlane / CI general
- FASTLANE_USER: Apple ID (email)
- FASTLANE_PASSWORD: App-specific password for Fastlane (recommended to use App-Specific Password)

Notes
- For Android keystore and Google Play service account, it's common to store the binary JSON / keystore as base64 in a secret and decode it in CI before use.
- Keep your secrets minimal and rotate them regularly.

Local testing
- For local development, create an `.env` (gitignored). Example `.env.example` provided in repo.

Security reminder
- Never commit keys, keystore files, or service account JSON directly to the repo. Always store in CI secrets or an external secret manager.