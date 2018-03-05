import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Auth from '../Auth/Auth';
import Account from '../Account/Account';
import NavBar from '../NavBar/NavBar';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
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
    this.drawerToggle = this.drawerToggle.bind(this);
    this.passwordUpdate = this.passwordUpdate.bind(this);
    this.passwordReset = this.passwordReset.bind(this);
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

  render() {
    return (
      <Router history={history}>
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
                  <Login user={this.state.user} handleLogin={this.login} passwordReset={this.passwordReset} />
                )}
              />
              <Route path="/register" render={state => <Register handleRegister={this.register} />} />
              <Route
                path="/account"
                render={state =>
                  this.state.user ? (
                    <Account user={this.state.user} passwordUpdate={this.passwordUpdate} />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
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
          history.push({ pathname: '/account' });
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
    auth.doSignOut().then(() => {
      this.setState({ ...this.state, user: null, isLoggedIn: false, appDrawerOpen: false });
      history.push({ pathname: '/login' });
    });
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
        history.push({ pathname: '/account' });
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
   * Update a User's password via Firebase
   * @param  {string} password
   */
  passwordUpdate(password) {
    return this.state.user.updatePassword(password);
  }
  /**
   * Reset a User's password via Firebase
   * @param  {string} email
   */
  passwordReset(email) {
    return auth.doPasswordReset(email);
  }

  /**
   * Toggles the App Drawer
   */
  drawerToggle() {
    this.setState({ ...this.state, user: this.state.user, appDrawerOpen: !this.state.appDrawerOpen });
  }
}
