import React, { Component } from 'react';
import './Account.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/fontawesome-free-solid';

import Minus from 'material-ui/svg-icons/navigation/arrow-back';
import Plus from 'material-ui/svg-icons/navigation/arrow-forward';

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

        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn className="firstColumn">ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Set</TableHeaderColumn>
              <TableHeaderColumn className="wantColumn">Want</TableHeaderColumn>
              <TableHeaderColumn className="tradeColumn">Trade</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow selectable={false}>
              <TableRowColumn className="firstColumn">1</TableRowColumn>
              <TableRowColumn>Jace the Mind Sculptor</TableRowColumn>
              <TableRowColumn>Worldwake</TableRowColumn>
              <TableRowColumn className="valign-wrapper wantColumn">
                <FontAwesomeIcon icon={faMinus} />
                <span className="iconStyles"> 4 </span>
                <FontAwesomeIcon icon={faPlus} />
              </TableRowColumn>
              <TableRowColumn className="valign-wrapper tradeColumn">
                <FontAwesomeIcon icon={faMinus} />
                <span className="iconStyles">0</span>
                <FontAwesomeIcon icon={faPlus} />
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
