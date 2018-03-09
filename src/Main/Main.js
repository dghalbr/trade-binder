import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Account from '../Account/Account';
import NavBar from '../NavBar/NavBar';
import createBrowserHistory from 'history/createBrowserHistory';
import { firebaseAuth } from '../config/constants';

const history = createBrowserHistory();

function PrivateRoute({ component: Component, exact, strict, path, authed, ...rest }) {
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

function PublicRoute({ component: Component, exact, strict, path, authed, ...rest }) {
  return; //TODO test out exact working on Home
  <Route exact={exact} strict={strict} path={path} {...rest} render={props => <Component {...props} {...rest} />} />;
}

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoggedIn: firebaseAuth().currentUser ? true : false,
      appDrawerOpen: false,
      user: firebaseAuth().currentUser,
      authed: firebaseAuth().currentUser ? true : false,
      loading: true,
      cardCollection: [
        {
          id: 1,
          name: 'Jace the Mind Sculptor',
          set: 'Worldwake',
          want: 4,
          trade: 0,
          hovered: false
        }
      ]
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
    // */
    //Do we need this anymore now that authed is on the observable?
    // if (this.state.authed !== this.state.isLoggedIn) {
    //   this.setState({ ...this.state, isLoggedIn: this.state.authed });
    // }
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar
            isLoggedIn={this.state.authed}
            logout={this.logout}
            appDrawerOpen={this.state.appDrawerOpen}
            drawerToggle={this.drawerToggle}
          />
          <div id="content-wrapper">
            <br />
            <br />
            <Switch>
              <Route exact path="/" render={state => <Home />} />
              <PublicRoute exact="exact" path="/" component={Home} />

              <PublicRoute
                path="/login"
                handleLogin={this.login}
                passwordReset={this.passwordReset}
                component={Login}
              />
              <PublicRoute path="/register" handleRegister={this.register} component={Register} />
              <PrivateRoute
                authed={this.state.authed}
                path="/account"
                user={firebaseAuth().currentUser}
                passwordUpdate={this.passwordUpdate}
                component={Account}
                cardCollection={this.state.cardCollection}
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
    if (!firebaseAuth().currentUser) {
      firebaseAuth()
        .signInAndRetrieveDataWithEmailAndPassword(username, password)
        .then(user => {
          // this.setState({ ...this.state, user: user.user, isLoggedIn: true, appDrawerOpen: false }); do we still need authed on this?
          this.setState({ ...this.state, user: user.user, authed: true, appDrawerOpen: false });
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
        //this.setState({ ...this.state, user: null, isLoggedIn: false, appDrawerOpen: false }); do we still need authed on this?
        this.setState({ ...this.state, user: null, authed: false, appDrawerOpen: false });
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
        // this.setState({ ...this.state, user: user, isLoggedIn: true, appDrawerOpen: false }); do we still need authed on this?
        this.setState({ ...this.state, user: user, authed: true, appDrawerOpen: false });
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
