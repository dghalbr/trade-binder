import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Appbar from 'muicss/lib/react/appbar';


export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  //TODO: May want to make the if logic its own component.
  render() {
    return (
      <header className="mui-appbar mui--z1">
        <Appbar className="Appbar">
          <div className="mui-container">
            <table>
              <tr className="mui--appbar-height">
                <td className="mui--text-title">Trade Binder</td>
                <td className="mui--text-right">
                  {!this.props.isLoggedIn ? (
                    <ul class="mui-list--inline mui--text-body2">
                      <li><Link to="/" >Home</Link></li>
                      <li><Link to="/login" >Login</Link></li>
                      <li><Link to="/register" >Register</Link></li>
                    </ul>
                  ) : (
                    <ul class="mui-list--inline mui--text-body2">
                      <li><Link to="/" >Home</Link></li>
                      <li>
                        <Link to="/login" onClick={this.props.logout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  )}
                </td>
              </tr>
            </table>
          </div>
        </Appbar>
      </header>
    );
  }
}