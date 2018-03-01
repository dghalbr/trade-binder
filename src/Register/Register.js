import React, { Component } from 'react';
import './Register.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
    this.props.handleRegister(document.getElementById('username').value, document.getElementById('password').value);
    document.getElementById('username').value = null;
    document.getElementById('password').value = null;
  }

  render() {
    return (
      <div>
        <TextField className="Login-center" type="text" id="username" />
        <TextField className="Login-center" type="password" id="password" />
        <br />
        <RaisedButton className="Login-center" label="Register" id="register" onClick={this.register} color="primary" />
      </div>
    );
  }
}
