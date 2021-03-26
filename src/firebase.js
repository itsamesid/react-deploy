// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAdx4hEed1BePMqa3a6_cw3_Rp_ShfNN8",
  authDomain: "cryptomarket-28acc.firebaseapp.com",
  projectId: "cryptomarket-28acc",
  storageBucket: "cryptomarket-28acc.appspot.com",
  messagingSenderId: "764333021210",
  appId: "1:764333021210:web:5b3646c29707c41b8199a3",
  measurementId: "G-133WBJZ2T5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
  
  
