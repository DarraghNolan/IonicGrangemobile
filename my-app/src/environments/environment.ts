// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  API_KEY: '656000c9a79742ec96de3006c3254b20',
  API_URL: 'https://newsapi.org/v2',

  Weather_API_KEY: '56b6ddd654c49febe377e9b65a822379',
  Weather_API_URL: 'https://api.openweathermap.org/data/2.5/',

  firebase: {
    projectId: 'grangemobile-b4eb5',
    appId: '1:140150893451:web:61a2ae42c0e60b0123dd8e',
    storageBucket: 'grangemobile-b4eb5.appspot.com',
    apiKey: 'AIzaSyDvRv8bpVNOcFBEDJRratNFivcuaSWaBfo',
    authDomain: 'grangemobile-b4eb5.firebaseapp.com',
    messagingSenderId: '140150893451',
    measurementId: 'G-612ST051B6',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
