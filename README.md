# react-native-stocks-app
Source code of example app with poloniex api.


### Installing React-Native Command Line Interface
You may install react-native with the following npm command
```
npm install -g react-native-cli
```
once this is complete, navigate to this projects folder and type 
```
npm install
``` 
*but my advice is 
```
yarn install
``` 


to install all dependencies listed in the project's package.json file

### Configuring the environments for iOS and Android

__iOS (XCode)__

Navigate to project ios subfolder and run
```
pod install
```

__Android (AndroidStudio)__

Nothing

## Running the demos
The hello world project is designed to work with both ios and android systems. It will run on the simulator or the actual device.

You can start streaming the app to your device with the following commands

__For iOS__

```
react-native run-ios
```
For iOS you will probably want to have the simulator open already as XCode 9 does not start the simulator automatically with this command

__For Android__

```
react-native run-android
```
Be sure you have the android platform-tools in your PATH environment variable so that react can access tools like adb to run your app. You may need to setup a virtual device first if you wish to use the simulator.

You may also run either app by using the standard build and run tools in each platforms respective IDE


__ANDROID ENV__

Don't forget set ENV for android
```
 ANDROID_HOME={path}/Android/sdk
 ANDROID_SDK_ROOT={path}/Android/sdk
 ANDROID_AVD_HOME={path}/.android/avd
```
