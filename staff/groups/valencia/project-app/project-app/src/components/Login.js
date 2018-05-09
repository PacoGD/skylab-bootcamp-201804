import React, { Component } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom'
// import App from '../App'
import logic from '../logic/index'
import Xtorage from './Xtorage'
// import 'animate.css'
import swal from 'sweetalert2'


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
        let msg = ''
        let error = false
        let loginMsg = '<p>You are logged!</p>'
        let errorLoginMsg = '<p>You are already logged!</p>'

        logic.login(this.state.user, this.state.password)
            .then(res => {
                if (res.status === "KO") {
                swal({
                        type: 'error',
                        title: 'Hey!',
                        html: errorLoginMsg,
                        animation: true,
                        customClass: 'animated flipInX'
                    })
                }
            })
            .then(res =>
                Xtorage.local.set('user', { id: res.data.id, token: res.data.token })
            )
            .then(this.bucle)
            .catch(error => {
                this.props.history.go(0)
            })
    }

    bucle = () => {
        (Xtorage.local.get('user').token) ? this.props.history.push(`/home`) : this.bucle
    }

    //     logic.login(this.state.user, this.state.password)
    //             .then(res =>
    //         Xtorage.local.set('user', { id: res.data.id, token: res.data.token })
    //             )
    //             .then(swal({
    //     type: 'success',
    //     title: 'Welcome ' + this.state.user + '!',
    //     html: loginMsg,
    //     animation: true,
    //     customClass: 'animated flipInX'
    // }))
    // .then(this.props.history.push(`/home`))
    // }

    componentDidMount() {
        let errorLoginMsg = '<p>You are already logged!</p>'

        if (Xtorage.local.get('user')) {
            logic.token = Xtorage.local.get('user').token
            logic.id = Xtorage.local.get('user').id
            logic.retrieve()
                .then(res => res.data)
                .then(data => {
                    this.setState({
                        data
                    })
                }).then(swal({
                    type: 'error',
                    title: 'Hey!',
                    html: errorLoginMsg,
                    animation: true,
                    customClass: 'animated flipInX'
                }))
                .then(this.props.history.push(`/home`))
        }
    }

    render() {
        const { user, password } = this.state
        return <div className="login">
            <h1>Login</h1>
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.userName} value={user} placeholder="User" />
                <input type="password" onChange={this.userPassword} value={password} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    }
}

export default withRouter(Login)