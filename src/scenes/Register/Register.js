import React, { Component } from 'react';
import { Page } from '../../components/Page/Page';
import { Button } from '../../components/Button/Button';
import { Auth } from '../../firebase/auth';
import './Register.css';

export class Register extends Component {
  fireAuth = new Auth();

  register = () => {
    this.fireAuth.doCreateUserWithEmailAndPassword(
      document.getElementById("username").value, 
      document.getElementById("password").value
    );
  };

  render() {
    return (
      <div>
        <Page title="Register"/>
        <br/>
        <input class="Center" type="text" id="username"/>
        <input class="Center" type="password" id="password"/>
        <Button class="Button" label="Register" handleClick={this.register} />
      </div>
    );
  }
}
