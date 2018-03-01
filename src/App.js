import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Auth from './Auth/Auth';
import NavBar from './NavBar/NavBar';
import Container from 'muicss/lib/react/container';

const fireAuth = new Auth();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
  }

  login(username, password) {
    fireAuth.doSignInWithEmailAndPassword(username, password);
    this.setState({ isLoggedIn: true });
  };

  logout() {
    if (fireAuth.isLoggedIn()) {
      fireAuth.doSignOut();
    }
    this.setState({ isLoggedIn: false });
  };

  register(username, password) {
    //TODO: look into firebase callbacks/api for this and log the user in after registering 
    fireAuth.doCreateUserWithEmailAndPassword(username, password);
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
          <div className="mui--appbar-height"></div>
            <div id="content-wrapper" className="mui--text-center">
              <br/>
              <br/>
              <Container fluid={true}>
              <Switch>
                <Route exact path="/" render={state => <Home />} />
                <Route path="/login" render={state => <Login handleLogin={this.login} />} />
                <Route path="/register" render={state => <Register handleRegister={this.register} />} />
              </Switch>
              </Container>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
