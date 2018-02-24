import React, { Component } from 'react';
import { Link } from 'react-router';
import { Auth } from '../../firebase/auth';
import './Page.css';

export class Page extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    let fireAuth = new Auth();
    if(fireAuth.isLoggedIn()){
      fireAuth.doSignOut();
      console.log("logged out");
    }
  }

  //TODO:
  //The Login/Logout button should toggle based on logged in status
  //Register shouldn't show if the user is logged in
  render() {
    return (
      <div className="Page">
        <div className="Page-header">
          <h2>{this.props.title}</h2>
          <span className="Page-nav">
            <Link to="/">Home</Link>
          </span>
          <span className="Page-nav">
            <Link to="/login">Login</Link>
          </span>
          <span className="Page-nav">
            <Link to="/register">Register</Link>
          </span>
          <span className="Page-nav">
            <Link to="/login" onClick={this.logout}>Logout</Link>
          </span>
        </div>
      </div>
    );
  }
}