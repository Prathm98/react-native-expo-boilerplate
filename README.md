# REACT NATIVE EXPO Boilerplate

<div>
  Created by BitByBit team and maintained with ❤️ by an amazing <a href="https://www.hackerearth.com/challenges/hackathon/airbus-aerothon-40-finale/dashboard/1bfeeee/team/">team of developers</a>.
</div><br />

## Prerequisite

- Node v14.x or above : Installation instructions can be found [here.](https://nodejs.dev/learn/how-to-install-nodejs)
- Node Package Manager v6.x or above : It will be installed along with node installation.

## Backend server specific changes

If your backend is running on other url apart from [http://localhost:5000](http://localhost:5000) then,

- Update `backend_url` constant in `services/SampleServices.js` file present in project directory.

## POST method demo

POST method demo is available in `services/SampleService.js` file as `addMember()` method.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Press 'w' to open in browser, 'a' to open in android devices. App runs on [http://<local-network-ip>:19006](http://local-network-ip:19006).

The page will reload if you make edits.\
You will also see any lint errors in the console.

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready and want to connect with expo then use it with [expo-cli](https://docs.expo.io/get-started/installation).

## Build the Application

You can build app specific to Android (APK) or iOS (IPA) and distribute it on respective app stores. Instructions for build and deployment process can be found [here.](https://docs.expo.dev/build/introduction/)
