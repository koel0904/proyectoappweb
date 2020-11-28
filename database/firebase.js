import firebase from "firebase";
import "firebase/firestore";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBaIAEfU9doe9AoR0z3mmSmnG3eVK0fZW0",
    authDomain: "proyectoreal-c1225.firebaseapp.com",
    databaseURL: "https://proyectoreal-c1225.firebaseio.com",
    projectId: "proyectoreal-c1225",
    storageBucket: "proyectoreal-c1225.appspot.com",
    messagingSenderId: "1087704648537",
    appId: "1:1087704648537:web:08e4620114b327f400da48"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

 const db = firebase.firestore();

 export default {
  firebase,
  db
};
