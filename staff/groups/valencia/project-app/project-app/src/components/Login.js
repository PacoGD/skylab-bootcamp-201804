import React, { Component } from 'react';
import '../App.css';
import {withRouter} from 'react-router-dom'
// import App from '../App'
import logic from '../logic'


class Login extends Component {
    state = {
        user: '',
        password: '',
        state: '',
        token: ''
    }
    userName = (e) => {
        const user = e.target.value
        this.setState({ user })
    }
    userPassword = (e) => {

        const password = e.target.value
        this.setState({ password })
    }
    submit = (e) => {
        e.preventDefault()
                
        logic.login(this.state.user, this.state.password)
        .then(res => res)
        .then(this.props.history.push(`/home`))
        

    }
    render() {
        const { user, password } = this.state
        return <section>
            <h2>Login</h2>
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.userName} value={user} placeholder="User" />
                <input type="password" onChange={this.userPassword} value={password} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </section>
    }
}

export default withRouter(Login)