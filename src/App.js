import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Home } from './scenes/Home/Home';
import { Login } from './scenes/Login/Login';
import { Register } from './scenes/Register/Register';
import { Auth } from './firebase/auth';
import { NavBar } from './components/NavBar/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login = (username, password) => {
    let fireAuth = new Auth();
    fireAuth.doSignInWithEmailAndPassword(username, password);
    this.setState({ isLoggedIn: true });
    console.log('logged in: ', this.state.isLoggedIn);
  };

  logout = () => {
    let fireAuth = new Auth();
    if (fireAuth.isLoggedIn()) {
      fireAuth.doSignOut();
      console.log('logged out');
    }
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <Router>
        <div>
          <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
          <Switch>
            <Route exact path="/" render={state => <Home />} />
            <Route path="/login" render={state => <Login handleLogin={this.login} />} />
            <Route path="/register" render={state => <Register />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
