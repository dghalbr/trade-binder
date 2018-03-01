import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  //TODO: May want to make the if logic its own component.
  render() {
    return (
      <MuiThemeProvider>
        <AppBar className="Appbar">
          <nav>
            {!this.props.isLoggedIn ? (
              <ul>
                <li>Trade Binder</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>Trade Binder</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login" onClick={this.props.logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}
