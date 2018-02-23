import React, { Component } from 'react';
import { Link } from 'react-router';
import './Page.css';

export class Page extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title
    }

    render() {
        return (
            <div className="Page">
                <div className="Page-header">
                    <h2>{this.title}</h2>
                    <span className="Page-nav">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="Page-nav">
                        <Link to="/login">Login</Link>
                    </span>
                </div>
                <p className="Page-intro">
                    This is the {this.title} page.
                </p>
            </div>
        );
    }
}