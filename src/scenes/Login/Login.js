import React, { Component } from 'react';
import './Login.css';

export class Login extends Component {
  login = () => {
    this.props.handleLogin(document.getElementById('username').value, document.getElementById('password').value);
    document.getElementById('username').value = null;
    document.getElementById('password').value = null;
  };

  render() {
    return (
      <div>
        <input className='Login-center' type='text' id='username' />
        <input className='Login-center' type='password' id='password' />
        <button className='LoginButton Login-center' onClick={this.login}>Login</button>
      </div>
    );
  }
}
