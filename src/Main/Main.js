import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Auth from '../Auth/Auth';
import Account from '../Account/Account';
import NavBar from '../NavBar/NavBar';

const auth = new Auth();

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: auth.isLoggedIn(),
      appDrawerOpen: false,
      user: auth.getCurrentUser()
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.drawerToggle = this.drawerToggle.bind(this);
  }

  componentDidUpdate() {
    /*
     * DGH - Auth.js isn't a React Component so if a user
     * becomes logged in or out we need to re-render those 
     * buttons. 
     */
    if (this.state.isLoggedIn !== auth.isLoggedIn()) {
      this.setState({ ...this.state, isLoggedIn: !this.state.isLoggedIn });
    }
  }

  /**
   * Login to the application via Firebase
   * @param  {string} username
   * @param  {string} password
   */
  login(username, password) {
    if (!auth.isLoggedIn()) {
      auth
        .doSignInAndRetrieveDataWithEmailAndPassword(username, password)
        .then(user => {
          this.setState({ ...this.state, user: user.user, isLoggedIn: true, appDrawerOpen: false });
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  }

  /**
   * Logout of the application via Firebase
   */
  logout() {
    if (auth.isLoggedIn()) {
      auth.doSignOut();
    }
    this.setState({ ...this.state, user: null, isLoggedIn: false, appDrawerOpen: false });
  }

  /**
   * Register an account via Firebase.
   * @param  {string} username
   * @param  {string} password
   */
  register(username, password) {
    auth
      .doCreateUserWithEmailAndPassword(username, password)
      .then(user => {
        this.setState({ ...this.state, user: user, isLoggedIn: true, appDrawerOpen: false });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
      });
  }

  /**
   * Get the User object of the currently logged in User
   * @returns {Object} user
   */
  getCurrentUser() {
    return auth.getCurrentUser();
  }

  /**
   * Toggles the App Drawer
   */
  drawerToggle() {
    this.setState({ ...this.state, user: this.state.user, appDrawerOpen: !this.state.appDrawerOpen });
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar
            isLoggedIn={this.state.isLoggedIn}
            logout={this.logout}
            appDrawerOpen={this.state.appDrawerOpen}
            drawerToggle={this.drawerToggle}
          />
          <div id="content-wrapper">
            <br />
            <br />
            <Switch>
              <Route exact path="/" render={state => <Home />} />
              <Route
                path="/login"
                render={state => (
                  <Login isLoggedIn={this.state.isLoggedIn} user={this.state.user} handleLogin={this.login} />
                )}
              />
              <Route path="/register" render={state => <Register handleRegister={this.register} />} />
              <Route path="/account" render={state => <Account user={this.state.user} />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
