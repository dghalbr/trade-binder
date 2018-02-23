import React, { Component } from 'react';
import { Router, browserHistory, Route } from 'react-router';
import { Login } from './scenes/Login/Login';
import { Home } from './scenes/Home/Home';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;