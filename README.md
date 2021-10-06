# EFLDashboard

## Configuration needed

Before running the application, create a folder named config under src/app. In this folder, create a file named index.ts. Set up the config file with your firebase and firebaseui configs, using the below as a template:

```
export const config = {
  firebaseConfig: {
    apiKey: <YOUR_DATA_HERE>,
    authDomain: <YOUR_DATA_HERE>,
    databaseURL: <YOUR_DATA_HERE>,
    projectId: <YOUR_DATA_HERE>,
    storageBucket: <YOUR_DATA_HERE>,
    messagingSenderId: <YOUR_DATA_HERE>,
    appId: <YOUR_DATA_HERE>,
    measurementId: <YOUR_DATA_HERE>,
  },
};

export const firebaseUiConfig = {
  // Config here
;
```

Explanation of config properties:

`firebaseConfig` - The data that firebase provides when you create an application.

`firebaseUiConfig` - The config to setup the firebaseui login page.

## Analyzing bundle size

Run the following commands to open a window that will show a visual representation of your build output:

```
ng build --stats-json
webpack-bundle-analyzer dist/stats-es5.json
```
