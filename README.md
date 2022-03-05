# Simple eCommerce App Project with Expo-CLI

Available Scripts
If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

npm start

Runs your app in development mode.
Open it in the Expo app on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.
Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the --reset-cache flag to the start script:

npm run ios

Like npm start, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

npm run android

Like npm start, but also attempts to open your app on a connected Android device or emulator.

When starting your project, you'll see something like this for your project URL:

exp://192.168.0.2:19000
The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like exp://localhost:19000, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

Installations

You need to install required packages which are import to the project. 

