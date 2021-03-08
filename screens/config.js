import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDyIZF0SqmY1581OMjjGqKn0q4iv0OMYBM",
    authDomain: "fir-rn-5ae9e.firebaseapp.com",
    databaseURL: "https://fir-rn-5ae9e.firebaseio.com",
    projectId: "fir-rn-5ae9e",
    storageBucket: "fir-rn-5ae9e.appspot.com",
    messagingSenderId: "523233320193",
    appId: "1:523233320193:web:a4bfcf83c1e8b892d84f00",
    measurementId: "G-V3L4RV9HSG"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);
 export const firebaseAuth = firebaseApp.auth();