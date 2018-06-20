import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import api from 'api';
import Xtorage from '../xtorage'
api.url = 'http://localhost:5000/api'

class Login extends Component {
    state = {
        email: '',
        password: '',
        state: '',
        token: ''
    }
    email = (e) => {
        const email = e.target.value
        this.setState({ email })
    }
    userPassword = (e) => {
        const password = e.target.value
        this.setState({ password })
    }

    submit = (e) => {
        e.preventDefault()
        api.login(this.state.email, this.state.password)
           
            .then(res =>{

                Xtorage.local.set('user', { id: res.data.id, token: res.data.token})
                this.props.history.push(`/`)
            })
            .catch(error => {
                console.error(error)
                this.props.history.push(`/login`)
            })

    }
    render() {
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={this.submit}>
                    <input type="text" onChange={this.email} placeholder="Email" autoComplete="off" />
                    <input type="password" onChange={this.userPassword} placeholder="Password" autoComplete="off" />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);