import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  //TODO: May want to make the if logic its own component.
  render() {
    return (
      <div className="NavBar">
        <div className="NavBar-header">
          <h2>Trade Binder</h2>
          <span className="NavBar-nav">
            <Link to="/">Home</Link>
          </span>
          {!this.props.isLoggedIn ? (
            <span>
              <span className="NavBar-nav">
                <Link to="/login">Login</Link>
              </span>
              <span className="NavBar-nav">
                <Link to="/register">Register</Link>
              </span>
            </span>
          ) : (
            <span className="NavBar-nav">
              <Link to="/login" onClick={this.props.logout}>
                Logout
              </Link>
            </span>
          )}
        </div>
        <br />
      </div>
    );
  }
}
