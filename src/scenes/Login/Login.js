import React, { Component } from 'react';
import { Button } from '../../components/Button/Button';
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
        <br />
        <input className="Center" type="text" id="username" />
        <input className="Center" type="password" id="password" />
        <Button className="Button" label="Login" handleClick={this.login} />
      </div>
    );
  }
}
