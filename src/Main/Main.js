import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Auth from '../Auth/Auth';
import NavBar from '../NavBar/NavBar';

const fireAuth = new Auth();

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      appDrawerOpen: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.drawerToggle = this.drawerToggle.bind(this);
  }

  login(username, password) {
    fireAuth.doSignInWithEmailAndPassword(username, password);
    this.setState({ isLoggedIn: true });
  }

  logout() {
    if (fireAuth.isLoggedIn()) {
      fireAuth.doSignOut();
    }
    this.setState({ isLoggedIn: false });
  }

  register(username, password) {
    //TODO: look into firebase callbacks/api for this and log the user in after registering
    fireAuth.doCreateUserWithEmailAndPassword(username, password);
  }

  drawerToggle() {
    this.setState({ appDrawerOpen: !this.state.appDrawerOpen });
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
