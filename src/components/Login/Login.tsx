import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebase/auth";
import "./Login.css"
import { googleProvider, googleSignInPopup } from "../../helpers/googleAuth";
import React, { useEffect } from "react";

//const makeGoogleCredential = (googleUser:any) =>{
//  let credential = firebase.auth.GoogleAuthProvider.credential(
//    googleUser.getAuthResponse().id_token);
//}

export const Login: React.FC<any> = () => {
  const getUser = async () => {
    let provider = googleProvider();
    let result = await googleSignInPopup(provider);
    console.log(result);
  };
  const configureUI = () => {
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Other config options...
    });
  };
  useEffect(() => {
    getUser();
    configureUI();
  }, []);
  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
};
