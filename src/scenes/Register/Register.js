import React, { Component } from 'react';
import { Button } from '../../components/Button/Button';
import { Auth } from '../../firebase/auth';
import './Register.css';

export class Register extends Component {
  fireAuth = new Auth();

  register = () => {
    this.fireAuth.doCreateUserWithEmailAndPassword(
      document.getElementById('username').value,
      document.getElementById('password').value
    );
  };

  render() {
    return (
      <div>
        <br />
        <input className="Center" type="text" id="username" />
        <input className="Center" type="password" id="password" />
        <Button className="Button" label="Register" handleClick={this.register} />
      </div>
    );
  }
}
