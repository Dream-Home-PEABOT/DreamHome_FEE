import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";
import "./Login.css"
import React, { useEffect } from "react";


export const Login: React.FC<any> = ({ history }) => {
  const uiSettings = {
    callbacks: {
    signInSuccessWithAuthResult: function(authResult:any, redirectUrl:any) {
      localStorage.userUID = authResult.user.uid
      localStorage.displayName = authResult.user.displayName
      localStorage.email = authResult.user.email
      history.push("/")
      return false
    },
  },
  signInOptions: [
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
