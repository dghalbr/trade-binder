import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
    constructor(props) {
        super(props);
        this.label = this.props.label;
        this.handleClick = this.props.handleClick;
    }

    render() {
        return (
            <button className='Button' onClick={this.handleClick}>{this.label}</button>
        );
    }
}