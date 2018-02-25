import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={this.props.class} onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
}
