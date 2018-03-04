import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AccountInfo from './components/AccountInfo/AccountInfo';
import './Account.css';

export default class Account extends Component {
  constructor(props) {
    super(props);

    if (this.props.user) {
      console.log('Signed in');
    } else {
      console.log('Not signed in');
    }
  }

  render() {
    return <div>{!this.props.user ? <Redirect to="/login" /> : <AccountInfo user={this.props.user} />}</div>;
  }
}
