import React, { Component } from 'react';
import './Register.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
    this.props.handleRegister(document.getElementById('username').value,document.getElementById('password').value);
    document.getElementById('username').value = null;
    document.getElementById('password').value = null;
  };

  render() {
    return (
      <div>
        <input className="Register-center" type="text" id="username" />
        <input className="Register-center" type="password" id="password" />
        <button id="register" className="Register-center" onClick={this.register}>Register</button>
      </div>
    );
  }
}
