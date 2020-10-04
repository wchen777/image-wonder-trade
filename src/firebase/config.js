  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCuWYvIzTabmQwFVxWofnGg8_Fri-ISErI",
    authDomain: "meme-wonder-trade.firebaseapp.com",
    databaseURL: "https://meme-wonder-trade.firebaseio.com",
    projectId: "meme-wonder-trade",
    storageBucket: "meme-wonder-trade.appspot.com",
    messagingSenderId: "1096909658319",
    appId: "1:1096909658319:web:97cec2e5eaad86294bffba",
    measurementId: "G-SFL9KE5RF0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const imageStorage = firebase.storage();
  const imageFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {imageStorage, imageFirestore, timestamp};
