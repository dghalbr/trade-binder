import React, { Component } from 'react';
import './Register.css';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

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
        <Input className="Register-center" type="text" id="username" />
        <Input className="Register-center" type="password" id="password" />
        <br/>
        <Button id="register" 
                className="Register-center" 
                onClick={this.register} 
                color='primary'>
                  Register
        </Button>
      </div>
    );
  }
}
