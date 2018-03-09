import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/fontawesome-free-solid';
import './CardRow.css';

export default class CardRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TableRow selectable={false}>
        <TableRowColumn className="firstColumn">{this.props.card.id}</TableRowColumn>
        <TableRowColumn>{this.props.card.name}</TableRowColumn>
        <TableRowColumn>{this.props.card.set}</TableRowColumn>
        <TableRowColumn className="valign-wrapper wantColumn">
          <FontAwesomeIcon icon={faMinus} />
          <span className="iconStyles"> {this.props.card.want} </span>
          <FontAwesomeIcon icon={faPlus} />
        </TableRowColumn>
        <TableRowColumn className="valign-wrapper tradeColumn">
          <FontAwesomeIcon icon={faMinus} />
          <span className="iconStyles">{this.props.card.trade}</span>
          <FontAwesomeIcon icon={faPlus} />
        </TableRowColumn>
        <TableRowColumn className="valign-wrapper deleteColumn">
          <RaisedButton secondary={true} label="Delete" id="deleteCard" />
        </TableRowColumn>
      </TableRow>
    );
  }
}
