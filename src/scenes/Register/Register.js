import React, { Component } from 'react';
import { Auth } from '../../firebase/auth';
import './Register.css';

export class Register extends Component {

  register = () => {
    this.props.handleRegister(document.getElementById('username').value,document.getElementById('password').value);
    document.getElementById('username').value = null;
    document.getElementById('password').value = null;
  };

  render() {
    return (
      <div>
        <input className="Register-center" type="text" id="username" />
        <input className="Register-center" type="password" id="password" />
        <button className="Register-center" onClick={this.register}>Register</button>
      </div>
    );
  }
}
