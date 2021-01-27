import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";
import "./Login.css";
import React, { useEffect } from "react";
import bkg_img from "../../images/report/Charco - Mobile Life.png";

export const Login: React.FC<any> = ({ history }) => {
  const uiSettings = {
    callbacks: {
      signInSuccessWithAuthResult: function (
        authResult: any,
        redirectUrl: any
      ) {
        localStorage.userUID = authResult.user.uid;
        localStorage.displayName = authResult.user.displayName;
        localStorage.email = authResult.user.email;
        history.push("/");
        return false;
      },
    },
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
  };
  const configureUI = () => {
    let ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiSettings);
  };
  useEffect(() => {
    configureUI();
  }, []);
  return (
    <div >
      <img
        src={bkg_img}
        alt="Big Shoes - Standing Pose"
        className="main-image"
      />
      <div className="title-container">
        <h3 className="title-2" data-testid="My">
          Save
        </h3>
        <h3 className="title-2" data-testid="Dream Home">
          Your
        </h3>
        <h3 className="title-2" data-testid="Dream Home">
          Dream!
        </h3>
        <div id="firebaseui-auth-container"></div>
      </div>
    </div>
  );
};
