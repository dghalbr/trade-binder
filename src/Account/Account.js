import React, { Component } from 'react';
import './Account.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Account extends Component {
  constructor(props) {
    super(props);

    if (this.props.user) {
      console.log('Signed in');
    } else {
      console.log('Not signed in');
    }
    this.passwordUpdate = this.passwordUpdate.bind(this);
    this.passwordReset = this.passwordReset.bind(this);
  }

  passwordUpdate() {
    this.props.passwordUpdate(document.getElementById('updatePasswordText').value).then(() => {
      document.getElementById('updatePasswordText').value = null;
    });
  }

  passwordReset() {
    this.props.passwordReset(document.getElementById('resetPasswordText').value).then(() => {
      document.getElementById('resetPasswordText').value = null;
    });
  }

  render() {
    return (
      <div>
        <h1>Account for {this.props.user.email}</h1>
        <br />
        <br />
        <h3>Change Password:</h3>
        <h5>Enter your new Password</h5>
        <TextField type="password" id="updatePasswordText" floatingLabelText="Password" />
        <br />
        <RaisedButton primary={true} label="Update Password" id="updatePasswordButton" onClick={this.passwordUpdate} />
        <br />
        <br />
        <h3>Reset Password:</h3>
        <h5>Enter your E-Mail</h5>
        <TextField type="text" id="resetPasswordText" floatingLabelText="E-Mail" />
        <br />
        <RaisedButton primary={true} label="Reset Password" id="resetPasswordButton" onClick={this.passwordReset} />
      </div>
    );
  }
}
