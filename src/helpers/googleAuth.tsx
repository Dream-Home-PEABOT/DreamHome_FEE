// These samples are intended for Web so this import would normally be
// done in HTML however using modules here is more convenient for
// ensuring sample correctness offline.
import "firebase/auth";
import firebase from "firebase/app";

// Docs: https://source.corp.google.com/piper///depot/google3/third_party/devsite/firebase/en/docs/auth/web/google-signin.md

export const googleProvider = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBauaSRpJA90Mm8_lyqS7BUUH3RZrB1MWI",
    authDomain: "fee-dreamhome.firebaseapp.com",
    projectId: "fee-dreamhome",
    storageBucket: "fee-dreamhome.appspot.com",
    messagingSenderId: "189229996617",
    appId: "1:189229996617:web:0a6f224b78d30b79a93d98",
    measurementId: "G-BBSDQ8FBCS",
  };
  console.log(firebase)
  firebase.initializeApp(firebaseConfig);
  const provider = new firebase.auth.GoogleAuthProvider();
  return provider;
};

export const googleSignInPopup = async (provider: any) => {
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    const credential = result.credential;
    const user = result.user;
    return [credential, user];
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    return [errorCode, errorMessage, email];
  }
};

export function googleSignInRedirectResult() {
  // [START auth_google_signin_redirect_result]
  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  // [END auth_google_signin_redirect_result]
}

export function googleBuildAndSignIn(id_token: any) {
  // [START auth_google_build_signin]
  // Build Firebase credential with the Google ID token.
  var credential = firebase.auth.GoogleAuthProvider.credential(id_token);

  // Sign in with credential from the Google user.
  firebase
    .auth()
    .signInWithCredential(credential)
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  // [END auth_google_build_signin]
}

// [START auth_google_callback]
export function onSignIn(googleUser: any) {
  console.log("Google Auth Response", googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.getAuthResponse().id_token
      );

      // Sign in with credential from the Google user.
      // [START auth_google_signin_credential]
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      // [END auth_google_signin_credential]
    } else {
      console.log("User already signed-in Firebase.");
    }
  });
}
// [END auth_google_callback]

// [START auth_google_checksameuser]
export function isUserEqual(googleUser: any, firebaseUser: any) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()
      ) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}
// [END auth_google_checksameuser]
