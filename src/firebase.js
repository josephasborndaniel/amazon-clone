import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn_EKXXW_T6aeLn4Vr6BtZSPcdjOZIHgY",
  authDomain: "challenge-364d4.firebaseapp.com",
  projectId: "challenge-364d4",
  storageBucket: "challenge-364d4.firebasestorage.app",
  messagingSenderId: "738416627199",
  appId: "1:738416627199:web:96c36aac72c915138cabca",
  measurementId: "G-NT7QDGDSFV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export{db,auth};