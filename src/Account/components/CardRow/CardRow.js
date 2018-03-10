import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/fontawesome-free-solid';
import './CardRow.css';

export default class CardRow extends Component {
  constructor(props) {
    super(props);
    this.changeHover = this.changeHover.bind(this);
  }

  changeHover(card) {
    this.props.hoveredupdate(this.props.card);
  }

  render() {
    const self = this;
    const { card, hoveredupdate, ...otherProps } = self.props;

    return (
      <TableRow selectable={false} onMouseEnter={this.changeHover} onMouseLeave={this.changeHover} {...otherProps}>
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
