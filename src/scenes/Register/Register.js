import React, { Component } from 'react';
import { Button } from '../../components/Button/Button';
import { Auth } from '../../firebase/auth';
import './Register.css';

export class Register extends Component {

  register = () => {
    this.props.handleRegister(
      document.getElementById('username').value,
      document.getElementById('password').value
    );
    document.getElementById('username').value = null;
    document.getElementById('password').value = null;
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
