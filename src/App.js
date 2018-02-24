import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import { Home } from './scenes/Home/Home';
import { Login } from './scenes/Login/Login';
import { Register } from './scenes/Register/Register';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    );
  }
}

export default App;
