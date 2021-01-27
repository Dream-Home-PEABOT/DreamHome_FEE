import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebase/auth";
import "./Login.css"
import { googleProvider, googleSignInPopup } from "../../helpers/googleAuth";
import React, { useEffect } from "react";


export const Login: React.FC<any> = () => {
  const uiSettings = {
    callbacks: {
    signInSuccessWithAuthResult: function(authResult:any, redirectUrl:any) {
      console.log(authResult, redirectUrl)
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
  },
  signInSuccessUrl: '/home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};
  const configureUI = () => {
    googleProvider();
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiSettings);
  };
  useEffect(() => {
    configureUI();
  }, []);
  return (
    <div>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};
