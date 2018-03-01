import * as firebase from 'firebase';
import dotenv from 'dotenv';
dotenv.config({ silent: true });

let defaultApp = null;
let loggedIn = false;

//Not sure this should be on the client as plain text?
defaultApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
});

export default class Auth {  constructor() {    //Observe if we're logged in or out
    firebase.auth().onAuthStateChanged(function(user) {
      if (user){
        loggedIn = true;
      } 
      else
      {
        loggedIn = false;
      }
    });
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }

    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }

    //Error codes as well as API Docs: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword

    /** Error Codes - createUserWithEmailAndPassword
     *  auth/email-already-in-use
     *    Thrown if there already exists an account with the given email address.
     *  auth/invalid-email
     *    Thrown if the email address is not valid.
     *  auth/operation-not-allowed
     *    Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
     *  auth/weak-password
     *    Thrown if the password is not strong enough.
     */

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
      });
  };

  //TODO: Check how to handle errors better
  doSignInWithEmailAndPassword = (email, password) => {
    /** Error Codes
     * auth/invalid-email
     *   Thrown if the email address is not valid.
     * auth/user-disabled
     *   Thrown if the user corresponding to the given email has been disabled.
     * auth/user-not-found
     *   Thrown if there is no user corresponding to the given email.
     * auth/wrong-password
     *   Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
     */
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        alert(error.message);
      });
  };

  doSignOut = () => firebase.auth().signOut();
  doPasswordReset = email => firebase.auth().sendPasswordResetEmail(email);
  doPasswordUpdate = password => firebase.auth().currentUser.updatePassword(password);
  isLoggedIn = () => loggedIn;
}
