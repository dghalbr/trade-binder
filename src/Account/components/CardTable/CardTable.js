import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/fontawesome-free-solid';
import './CardTable.css';

export default class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn className="firstColumn">ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Set</TableHeaderColumn>
            <TableHeaderColumn className="wantColumn">Want</TableHeaderColumn>
            <TableHeaderColumn className="tradeColumn">Trade</TableHeaderColumn>
            <TableHeaderColumn className="deleteColumn" />
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
            <TableRowColumn className="valign-wrapper deleteColumn">
              <RaisedButton secondary={true} label="Delete" id="deleteCard" />
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
