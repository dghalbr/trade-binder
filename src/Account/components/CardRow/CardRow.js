import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/fontawesome-free-solid';
import './CardRow.css';

export default class CardRow extends Component {
  constructor(props) {
    super(props);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn() {
    this.props.enterhover(this.props.card);
  }

  hoverOff() {
    this.props.leavehover(this.props.card);
  }

  render() {
    const { card, enterhover, leavehover, ...otherProps } = this.props;
    return (
      <TableRow selectable={false} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} {...otherProps}>
        <TableRowColumn className="firstColumn">{card.id}</TableRowColumn>
        <TableRowColumn>{card.name}</TableRowColumn>
        <TableRowColumn>{card.set}</TableRowColumn>
        <TableRowColumn className="valign-wrapper wantColumn">
          <FontAwesomeIcon icon={faMinus} />
          <span className="iconStyles"> {card.want} </span>
          <FontAwesomeIcon icon={faPlus} />
        </TableRowColumn>
        <TableRowColumn className="valign-wrapper tradeColumn">
          <FontAwesomeIcon icon={faMinus} />
          <span className="iconStyles">{card.trade}</span>
          <FontAwesomeIcon icon={faPlus} />
        </TableRowColumn>
        <TableRowColumn className="valign-wrapper deleteColumn">
          {card.hovered ? <RaisedButton secondary={true} label="Delete" id="deleteCard" /> : null}
        </TableRowColumn>
      </TableRow>
    );
  }
}
