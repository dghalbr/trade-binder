import React, { Component } from 'react';
import { Page } from '../../components/Page/Page';
import { Button } from '../../components/Button/Button';
import { Auth } from '../../firebase/auth';
import './Login.css';

export class Login extends Component {
  fireAuth = new Auth();
  
  login = () => {
    this.fireAuth.doSignInWithEmailAndPassword(
      document.getElementById("username").value, 
      document.getElementById("password").value
    );
    console.log("logged in");
  };

  render() {
    return (
      <div>
        <Page title="Login" />
        <br/>
        <input class="Center" type="text" id="username"/>
        <input class="Center" type="password" id="password"/>
        <Button class="Button" label="Login" handleClick={this.login}/>
      </div>
    );
  }
}
