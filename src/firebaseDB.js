import firebase from 'firebase';

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
  apiKey: 'AIzaSyD099rOOSoe-kY7BNG6Cs0bav-6brXnlug',
  authDomain: 'insectnet-web-apps.firebaseapp.com',
  databaseURL: 'https://insectnet-web-apps.firebaseio.com',
  projectId: 'insectnet-web-apps',
  storageBucket: 'insectnet-web-apps.appspot.com',
  messagingSenderId: '783064939557',
  appId: '1:783064939557:web:77c155bb4e56af8ff953cc',
  measurementId: 'G-G8JNVE5QGE',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const db = firebaseApp.database();
export default db;
