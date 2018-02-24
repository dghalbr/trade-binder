import * as firebase from 'firebase';

let defaultApp = null;
let loggedIn = false;

//Not sure this should be on the client as plain text?
defaultApp = firebase.initializeApp({
  apiKey: 'AIzaSyCJ08xZ2o-yfj1h9SF-DdSJMYWipYGqjak',
  authDomain: 'trade-binder.firebaseapp.com',
  databaseURL: 'https://trade-binder.firebaseio.com',
  projectId: 'trade-binder',
  storageBucket: 'trade-binder.appspot.com',
  messagingSenderId: '452350586373'
});

export class Auth {
  constructor() {
    //Observe if we're logged in or out
    firebase.auth()
    .onAuthStateChanged(function(user) {
      if (user) {
        loggedIn = true;
      } else {
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
  
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  };

  //TODO: Check how to handle errors better
  doSignInWithEmailAndPassword = (email, password) => {
    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error){
        alert(error.message);
    });
  }

  doSignOut = () => firebase.auth().signOut();
  doPasswordReset = email => firebase.auth().sendPasswordResetEmail(email);
  doPasswordUpdate = password => firebase.auth().currentUser.updatePassword(password);
  isLoggedIn = () => loggedIn;
}
