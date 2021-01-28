import firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";
import "./Login.css";
import React, { useEffect } from "react";
import bkg_img from "../../images/report/Charco - Mobile Life.png";

export const Login: React.FC = () => {
  const uiSettings = {
    callbacks: {
      signInSuccessWithAuthResult: function (
        authResult: any,
        redirectUrl: any
      ) {
        localStorage.userUID = authResult.user.uid;
        localStorage.displayName = authResult.user.displayName;
        localStorage.email = authResult.user.email;
        return true;
      },
    },
    signInSuccessUrl: "/",
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
    <div className="login-container">
      <div className="login-img-container">
        <img src={bkg_img} alt="Mobile phone" className="left-image" />
      </div>
      <div className="login-icons-container">
        <h3 className="title-3" data-testid="Dream Home">
          Save Your Dream!
        </h3>
        <div id="firebaseui-auth-container"></div>
        <h3 className="desc" data-testid="Dream Home">
          No Account? No worries! Click on the preferred method above to get
          one!
        </h3>
        <a
          className="twitter-hashtag-button"
          href="https://twitter.com/intent/tweet?original_referer=https://dream-home-cap.herokuapp.com&source=twitter-share-button&url=https://dream-home-cap.herokuapp.com/&text=My%2010%20year%20plan%20for%20my%20dream%20home: find out yours! pic.twitter.com/22ej5357uO "
          data-size="large"
        >
          Tweet
        </a>
      </div>
    </div>
  );
};
