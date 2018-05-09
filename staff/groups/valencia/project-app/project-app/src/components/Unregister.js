import React, { Component } from 'react';
import '../App.css';
import {withRouter} from 'react-router-dom'
// import App from '../App'
import logic from '../logic/index'
import Xtorage from './Xtorage'


class Unregister extends Component {
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
                
        logic.unregister(this.state.user, this.state.password).then(Xtorage.local.remove('user')).then(alert("See you soon")).then(this.props.history.push(`/`))
    }
    render() {
        const { user, password } = this.state
        return <div className="unregister">
            <h2>Unregister</h2>
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.userName} value={user} placeholder="User" />
                <input type="password" onChange={this.userPassword} value={password} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    }
}

export default withRouter(Unregister)
