TWA template & Bubblewrap instructions

This folder contains a short guide and example `assetlinks.json` that you should host at:
https://<YOUR_DOMAIN>/.well-known/assetlinks.json

Steps
1) Install Bubblewrap (locally):
   npm i -g @bubblewrap/cli

2) Initialize:
   bubblewrap init --manifest=https://your-domain/manifest.json

3) Edit `digitalAssetLinks` (Bubblewrap will help) and ensure `assetlinks.json` is served on your domain.

4) Build and open the generated Android project:
   bubblewrap build

5) Open in Android Studio and sign the AAB for Play Store.

Sample `assetlinks.json` (place on your web host)
See `assetlinks.json` in this folder as an example template.