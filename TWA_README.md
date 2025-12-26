TWA (Trusted Web Activity) quick guide with Bubblewrap

1) Install Bubblewrap globally:
   npm install -g @bubblewrap/cli

2) Initialize TWA project (replace URL):
   bubblewrap init --manifest=https://your-app-url/manifest.json

3) Build the project and open in Android Studio:
   bubblewrap build
   # open the generated project in Android Studio

4) Configure signing (keystore) and update the package name if needed.

5) Build an AAB and publish to Play Console.

Notes:
- Your web app must be served over HTTPS and have a valid manifest.
- Consider adding an assetlinks.json on your host to verify the domain for TWA.