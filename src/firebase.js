import firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA6EqJKy4vhhnhf0bDaEm5DbJEg8OTiYxQ",
    authDomain: "ticketpoa-fe117.firebaseapp.com",
    databaseURL: "https://ticketpoa-fe117.firebaseio.com",
    projectId: "ticketpoa-fe117",
    storageBucket: "ticketpoa-fe117.appspot.com",
    messagingSenderId: "732557280241",
    appId: "1:732557280241:web:4a1e4b9e5fb647b75cfa50",
    measurementId: "G-XMNLQXKD8V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;
