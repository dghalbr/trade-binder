import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import './CardTable.css';
import CardRow from '../CardRow/CardRow';

export default class CardTable extends Component {
  constructor(props) {
    super(props);
    this.onHover = this.onHover.bind(this);
  }

  onHover(card) {
    console.log('In cardTable');
    this.props.handleHover(card);
  }

  render() {
    let passCard = function(hover) {
      return function(card) {
        return <CardRow key={card.id} card={card} onHover={hover} />;
      };
    };

    let rows = this.props.cardCollection.map(passCard(this.props.onHover));

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
        <TableBody displayRowCheckbox={false}>{rows}</TableBody>
      </Table>
    );
  }
}

//          {this.props.cardCollection.map(item => (<CardRow key={item.id} card={item} onHover={this.props.handleHover} />          ))}
