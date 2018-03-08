import React, { Component } from 'react';
import './Account.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CardTable from './components/CardTable/CardTable';

export default class Account extends Component {
  constructor(props) {
    super(props);

    if (this.props.user) {
      console.log('Signed in');
    } else {
      console.log('Not signed in');
    }
    this.passwordUpdate = this.passwordUpdate.bind(this);
  }

  passwordUpdate() {
    this.props.passwordUpdate(document.getElementById('updatePasswordText').value).then(() => {
      document.getElementById('updatePasswordText').value = null;
    });
  }

  render() {
    return (
      <div>
        <h1 className="Account-center">Account for {this.props.user.email}</h1>
        <br />
        <br />
        <h3 className="Account-center">Change Password:</h3>
        <h5 className="Account-center">Enter your new Password</h5>
        <TextField className="Account-center" type="password" id="updatePasswordText" floatingLabelText="Password" />
        <br />
        <RaisedButton
          className="Account-center"
          primary={true}
          label="Update Password"
          id="updatePasswordButton"
          onClick={this.passwordUpdate}
        />
        <CardTable />
      </div>
    );
  }
}
