import React, { Component } from 'react';
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
    return <h1>Account for {this.props.user.email}</h1>;
  }
}
