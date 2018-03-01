import React, { Component } from 'react';
import './Login.css';
import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  /* DGH - "Class properties are for data - methods are for functions. 
   *  If you're installing a function as a property that's anything more than a bound method, 
   *  you're doing something subpar..": https://github.com/airbnb/enzyme/issues/697
   *  Can't use arrow functions for these methods and plan on testing them.
   */
  login() {
    this.props.handleLogin(document.getElementById('username').value, document.getElementById('password').value);
    document.getElementById('username').value = null;
    document.getElementById('password').value = null;
  };

  render() {
    return (
      <div>
        <Input className='Login-center' type='text' id='username' />
        <Input className='Login-center' type='password' id='password' />
        <br/>
        <Button id="login" className='Login-center' onClick={this.login} color='primary'>
          Login
        </Button>
      </div>
    );
  }
}
