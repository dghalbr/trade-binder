import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  //TODO: May want to make the if logic its own component.
  render() {
    return (
      <AppBar className="Appbar"
        title='TradeBinder'
        iconElementRight={!this.props.isLoggedIn ? (
          <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <MenuItem primaryText="Home" 
                              containerElement={<Link to="/" />}/>
                    <MenuItem primaryText="Login" 
                              containerElement={<Link to="/login" />}/>
                    <MenuItem primaryText="Register" 
                              containerElement={<Link to="/register" />}/>
          </IconMenu>
        ) : (
          <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <MenuItem primaryText="Home" 
                              containerElement={<Link to="/" />}/>
                    <MenuItem primaryText="Logout" 
                              containerElement={<Link to="/login" />}
                              onClick={this.props.logout}/>
          </IconMenu>
          )}
       />
        
    );
  }
}
