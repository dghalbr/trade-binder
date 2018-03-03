import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Auth from '../Auth/Auth';
import NavBar from '../NavBar/NavBar';

const auth = new Auth();

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: auth.isLoggedIn(),
      appDrawerOpen: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.drawerToggle = this.drawerToggle.bind(this);
  }

  login(username, password) {
    auth.doSignInWithEmailAndPassword(username, password);
    if (auth.isLoggedIn()) {
      this.setState({ ...this.state, isLoggedIn: true });
    }
  }

  logout() {
    if (auth.isLoggedIn()) {
      auth.doSignOut();
    }
    this.setState({ ...this.state, isLoggedIn: false, appDrawerOpen: false });
  }

  register(username, password) {
    //TODO: look into firebase callbacks/api for this and log the user in after registering
    auth.doCreateUserWithEmailAndPassword(username, password);
  }

  drawerToggle() {
    this.setState({ ...this.state, appDrawerOpen: !this.state.appDrawerOpen });
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
              <Route path="/login" render={state => <Login handleLogin={this.login} />} />
              <Route path="/register" render={state => <Register handleRegister={this.register} />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
