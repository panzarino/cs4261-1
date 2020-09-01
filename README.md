# CS 4261 First Programming Assignment

We built a simple note taking app using [Ionic](https://ionicframework.com/).

### Installation

In order to install this project, you must have Node.js installed. You can install Node here: https://nodejs.org/en/.

Next, clone this repository to your local workspace. Go ahead and open a terminal in this project directory.

You can install dependencies with the following command:

```
npm install
```

### Run in Browser

Running this project in the browser is simple, and can be done with the following command:

```
npm start
```

This should open the application in your browser. To get a preview of how the app would look on a real device, you can use [Chrome's Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/) or [Firefox's Responsive Design Mode](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode).

### Run on iOS

Running on iOS is a bit more complicated. For more information, see the official [Ionic tutorial](https://ionicframework.com/docs/developing/ios).

You'll need a Mac with Xcode installed, along with the Xcode command line tools which can be installed by running:

```
xcode-select --install
```

You'll need to have [Cocoapods](https://cocoapods.org/) installed, which requires [Ruby](https://www.ruby-lang.org/en/downloads/) and [Gem](https://rubygems.org/pages/download) to be installed first.

Finally, you'll need the [Homebrew](https://brew.sh/) package manager.

To get started, you have to install some additional dependencies:

```
npm install ios-sim
brew install ios-deploy
```

Next, run the following command within `/ios/App`:

```
pod install
```

Now, you should be able to open the project in Xcode. Running the following command should launch the Xcode project, where you can run the app on a simulator or real device.

```
ionic capacitor run ios -l --external
```

After opening the project in Xcode, open the `App` and go to the `Signing & Capabilities` tab. Make sure that "Automatically manage signing" is turned on and a team is selected from the dropdown.

Finally, you should be able to run the app by clicking the play button.
