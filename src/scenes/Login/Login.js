import React, { Component } from 'react';
import { Page } from '../../components/Page/Page';
import { Button } from '../../components/Button/Button';

export class Login extends Component {
    
    login = () => {
        console.log("Login");
    };

    register = () => {
        console.log("Register");
    };

    render() {
        return (
            <div>
                <Page title="Login" />
                <Button label="Login" handleClick={this.login} />
                <Button label="Register" handleClick={this.register} />
            </div>
        );
    }
}