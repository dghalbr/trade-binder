import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import './CardTable.css';
import CardRow from '../CardRow/CardRow';

export default class CardTable extends Component {
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
          {this.props.cardCollection.map(item => <CardRow card={item} />)}
        </TableBody>
      </Table>
    );
  }
}
