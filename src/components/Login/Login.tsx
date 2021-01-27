import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebase/auth";
import "./Login.css"
import React, { useEffect } from "react";


export const Login: React.FC<any> = () => {
  const uiSettings = {
    callbacks: {
    signInSuccessWithAuthResult: function(authResult:any, redirectUrl:any) {
      console.log(authResult.user)
      localStorage.userUID = authResult.user.uid
      localStorage.displayName = authResult.user.displayName
      localStorage.email = authResult.user.email
      return true;
    },
  },
  signInSuccessUrl: '/home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID
  ],
};
  const configureUI = () => {
    let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
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
