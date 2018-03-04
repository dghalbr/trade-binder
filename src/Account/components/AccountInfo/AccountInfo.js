import React, { Component } from 'react';
import './AccountInfo.css';

export default class AccountInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Account for {this.props.user.email}</h1>;
  }
}
