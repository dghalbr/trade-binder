// import * as firebase from 'firebase';
// import dotenv from 'dotenv';
// dotenv.config({ silent: true });
import { ref, firebaseAuth } from '../config/constants';

export function auth(email, pw) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then(saveUser);
}

export function logout() {
  return firebaseAuth().signOut();
}

export function login(email, pw) {
  return firebaseAuth().signInAndRetrieveDataWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
  return ref
    .child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);
}

// let defaultApp = null;

//Not sure this should be on the client as plain text?
// defaultApp = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
// });

// export default class Auth {
//   constructor() {
//     //Observe if we're logged in or out
//     firebase.auth().onAuthStateChanged(function(user) {
//       if (user) {
//         console.log('Logged In');
//       } else {
//         console.log('Logged Out');
//       }
//     });
//   }
//   /**
//    * Creates a new User via Firebase. If successful it also
//    * logs that new User into the application.
//    *
//    * @param  {string} email
//    * @param  {string} password
//    * @returns {Object} A User object on Resolve and an Error object on Reject.
//    */
//   doCreateUserWithEmailAndPassword = (email, password) => {
//     if (email.length < 4) {
//       alert('Please enter an email address.');
//       return;
//     }

//     if (password.length < 4) {
//       alert('Please enter a password.');
//       return;
//     }

//     //Error codes as well as API Docs: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword

//     /** Error Codes - createUserWithEmailAndPassword
//      *  auth/email-already-in-use
//      *    Thrown if there already exists an account with the given email address.
//      *  auth/invalid-email
//      *    Thrown if the email address is not valid.
//      *  auth/operation-not-allowed
//      *    Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.
//      *  auth/weak-password
//      *    Thrown if the password is not strong enough.
//      */

//     return firebase.auth().createUserWithEmailAndPassword(email, password);
//   };

//   /**
//    * Sign into the application via Firebase and retrieve User Data.
//    * @param  {string} email
//    * @param  {string} password
//    * @returns {Object} A User object on Resolve and an Error object on Reject.
//    */
//   doSignInAndRetrieveDataWithEmailAndPassword = (email, password) => {
//     /** Error Codes
//      * auth/invalid-email
//      *   Thrown if the email address is not valid.
//      * auth/user-disabled
//      *   Thrown if the user corresponding to the given email has been disabled.
//      * auth/user-not-found
//      *   Thrown if there is no user corresponding to the given email.
//      * auth/wrong-password
//      *   Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.
//      */
//     return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
//   };

//   /**
//    * Sign out of the application via Firebase
//    */
//   doSignOut = () => firebase.auth().signOut();

//   /**
//    * Reset a User's password via Firebase
//    * @param {string} email
//    */
//   doPasswordReset = email => firebase.auth().sendPasswordResetEmail(email);

//   /**
//    * Update a User's password via Firebase
//    * @param {string} password
//    */
//   doPasswordUpdate = password => firebase.auth().currentUser.updatePassword(password);

//   /**
//    * Returns if there is a current user signed into the application
//    * @returns {boolean}
//    */
//   isLoggedIn = () => {
//     let currentUser = firebase.auth().currentUser;
//     return currentUser ? currentUser.user !== null : false;
//   };

//   /**
//    * Get the User object of the current User
//    * @returns {Object}
//    */
//   getCurrentUser = () => {
//     let currentUser = firebase.auth().currentUser;
//     return currentUser ? currentUser.user : null;
//   };
// }
