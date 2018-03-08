import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
// import Auth from '../Auth/Auth';
import Account from '../Account/Account';
import NavBar from '../NavBar/NavBar';
import createBrowserHistory from 'history/createBrowserHistory';
import { firebaseAuth } from '../config/constants';

const history = createBrowserHistory();
// const auth = new Auth();

//TODO: CLEAN UP! get rid of isloggedin if we use authed or vice versa

function PrivateRoute({ component: Component, exact, strict, path, authed, ...rest }) {
  console.log('authed: ', authed);
  console.log('rest: ', rest);
  return (
    <Route
      exact={exact}
      strict={strict}
      path={path}
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, ...rest }) {
  console.log('rest: ', rest);
  return <Route {...rest} render={props => <Component {...props} />} />;
}

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: firebaseAuth().currentUser ? true : false,
      appDrawerOpen: false,
      user: firebaseAuth().currentUser,
      authed: firebaseAuth().currentUser ? true : false,
      loading: true
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.drawerToggle = this.drawerToggle.bind(this);
    this.passwordUpdate = this.passwordUpdate.bind(this);
    this.passwordReset = this.passwordReset.bind(this);
  }

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }

  componentDidUpdate() {
    /*
     * DGH - firebaseAuth.js isn't a React Component so if a user
     * becomes logged in or out we need to re-render those 
     * buttons. 
     */
    if (this.state.authed !== this.state.isLoggedIn) {
      this.setState({ ...this.state, isLoggedIn: this.state.authed });
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
                render={state => <Login handleLogin={this.login} passwordReset={this.passwordReset} />}
              />
              <Route path="/register" render={state => <Register handleRegister={this.register} />} />
              <PrivateRoute
                authed={this.state.authed}
                path="/account"
                user={firebaseAuth().currentUser}
                passwordUpdate={this.passwordUpdate}
                component={Account}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

  /**
   * 
              <Route path="/login" handleLogin={this.login}
                passwordReset={this.passwordReset} component={Login} />
   * 
   * 
   * 
   * 
   * 
   * Login to the application via Firebase
   * @param  {string} username
   * @param  {string} password
   */
  login(username, password) {
    if (!firebaseAuth().currentUser) {
      firebaseAuth()
        .signInAndRetrieveDataWithEmailAndPassword(username, password)
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
    firebaseAuth()
      .signOut()
      .then(() => {
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
    firebaseAuth
      .signInWithEmailAndPassword(username, password)
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
    return firebaseAuth().currentUser.updatePassword(password);
  }
  /**
   * Reset a User's password via Firebase
   * @param  {string} email
   */
  passwordReset(email) {
    return firebaseAuth().sendPasswordResetEmail(email);
  }

  /**
   * Toggles the App Drawer
   */
  drawerToggle() {
    this.setState({ ...this.state, user: this.state.user, appDrawerOpen: !this.state.appDrawerOpen });
  }
}
