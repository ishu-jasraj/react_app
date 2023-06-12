

import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isSubmitted: false,
            isInvalid: false,
            errorMsg: ''
        }
    }
    errorMsg = '';

    users = [
        {
            username: 'tom',
            password: 'tom123'
        },
        {
            username: 'munnu',
            password: 'munnu1234'
        }
    ]
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    backToLoginPage = () => {
        this.setState({
            username: '',
            password: '',
            isSubmitted: false,
            isInvalid: false,
            errorMsg: ''
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const user = this.users.find(user => {
            return user.password === password && user.username === username;
        });
        if (user) {
            this.setState({ isSubmitted: true })
        }
        else {
            this.setState({
                isInvalid: true,
                errorMsg: '*Please enter valid username or password!!'
            })
        }

    }
    render() {
        return (
            this.state.isSubmitted ?
                <div className='loggedIn'>
                    <p> User Logged In Successfully</p>
                    <button type='button' className='button-container' onClick={this.backToLoginPage}>Back To Login Page</button>
                </div>
                :
                <form onSubmit={this.onSubmit} className="form">
                    <header className='title'>
                        <span>Login</span>
                    </header>
                    <div className="input-container">
                        <label htmlFor='username'>Username </label>
                        <input id='username' type='text' placeholder='Enter Username' value={this.state.username}
                            onChange={this.handleUsernameChange} required />
                    </div>
                    <div className="input-container">
                        <label htmlFor='password'>Password </label>
                        <input id='password' placeholder='Enter Password' type='password' value={this.state.password}
                            onChange={this.handlePasswordChange} required />
                    </div>
                    <button type='submit' className="button-container">Sign In</button>
                    <div className='invalid'>{this.state.errorMsg}</div>
                </form>

        )
    }
}

export default Login;