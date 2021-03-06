import React, { Component } from 'react';
import './Register.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
        <h1 className="Register-center">Register</h1>
        <TextField className="Register-center" type="text" id="username" floatingLabelText="Username" />
        <TextField className="Register-center" type="password" id="password" floatingLabelText="Password" />
        <br />
        <RaisedButton
          primary={true}
          className="Register-center"
          label="Register"
          id="register"
          onClick={this.register}
        />
      </div>
    );
  }
}
