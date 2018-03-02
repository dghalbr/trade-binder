import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  logoutHandler(){
    this.props.drawerToggle;
    this.props.logout;
  }

  //TODO: May want to make the if logic its own component.
  render() {
    return (
      <div>
        <AppBar onClick={this.props.drawerToggle} className="NavBar" title="TradeBinder" />
        {!this.props.isLoggedIn ? (
        <Drawer open={this.props.appDrawerOpen}>
          <MenuItem primaryText="Home" onClick={this.props.drawerToggle} containerElement={<Link to="/" />} />
          <MenuItem primaryText="Login" onClick={this.props.drawerToggle} containerElement={<Link to="/login" />} />
          <MenuItem
            primaryText="Register"
            onClick={this.props.drawerToggle}
            containerElement={<Link to="/register" />}
          />
          </Drawer>
        ):(
          <Drawer open={this.props.appDrawerOpen}>
            <MenuItem primaryText="Home" onClick={this.props.drawerToggle} containerElement={<Link to="/" />} />
            <MenuItem primaryText="Logout" onClick={this.logoutHandler} containerElement={<Link to="/login" />} />
          </Drawer>
        )}
      </div>
    );
  }
}
