import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ewtlFPiHacRigYpwHW_FXuBXtbQq1II",
  authDomain: "fir-2d826.firebaseapp.com",
  projectId: "fir-2d826",
  storageBucket: "fir-2d826.appspot.com",
  messagingSenderId: "1066700261073",
  appId: "1:1066700261073:web:556dc35492f86a71c727f0",
  measurementId: "G-6VYBM884RV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export{db,auth};