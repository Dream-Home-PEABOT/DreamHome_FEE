// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
import "firebase/auth";
import firebase from "firebase/app";

export const firebaseInit = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBauaSRpJA90Mm8_lyqS7BUUH3RZrB1MWI",
    authDomain: "fee-dreamhome.firebaseapp.com",
    projectId: "fee-dreamhome",
    storageBucket: "fee-dreamhome.appspot.com",
    messagingSenderId: "189229996617",
    appId: "1:189229996617:web:0a6f224b78d30b79a93d98",
    measurementId: "G-BBSDQ8FBCS",
  };
  firebase.initializeApp(firebaseConfig);
};

export const logOut = ()=>{
   firebase.auth().signOut()
   localStorage.removeItem("displayName")
   localStorage.removeItem("email")
   localStorage.removeItem("userUID")
}

