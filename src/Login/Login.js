import React, { Component } from 'react';
import './Login.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.passwordReset = this.passwordReset.bind(this);
  }

  /* DGH - 'Class properties are for data - methods are for functions. 
   *  If you're installing a function as a property that's anything more than a bound method, 
   *  you're doing something subpar..': https://github.com/airbnb/enzyme/issues/697
   *  Can't use arrow functions for these methods and plan on testing them.
   */
  login() {
    this.props.handleLogin(document.getElementById('username').value, document.getElementById('password').value);
    document.getElementById('username').value = null;
    document.getElementById('password').value = null;
  }

  passwordReset() {
    this.props.passwordReset(document.getElementById('resetPasswordText').value).then(() => {
      document.getElementById('resetPasswordText').value = null;
    });
  }

  render() {
    return (
      <div>
        <h1 className="Login-center">Login</h1>
        <TextField className="Login-center" type="text" id="username" floatingLabelText="Username" />
        <TextField className="Login-center" type="password" id="password" floatingLabelText="Password" />
        <br />
        <RaisedButton primary={true} className="Login-center" label="Login" id="login" onClick={this.login} />
        <br />
        <br />
        <h3 className="Login-center">Reset Password:</h3>
        <h5 className="Login-center">Enter your E-Mail</h5>
        <TextField className="Login-center" type="text" id="resetPasswordText" floatingLabelText="E-Mail" />
        <br />
        <RaisedButton
          className="Login-center"
          primary={true}
          label="Reset Password"
          id="resetPasswordButton"
          onClick={this.passwordReset}
        />
      </div>
    );
  }
}
