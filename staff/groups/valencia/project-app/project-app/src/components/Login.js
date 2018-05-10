import React, { Component } from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom'
// import App from '../App'
import logic from '../logic/index'
import Xtorage from './Xtorage'


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
            .then(res => {
                if (res.status === "KO") {
                    //ERROOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRRR
                    throw Error("KO") //BORRALO
                    
                } 
                return res
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
        if (Xtorage.local.get('user').token) this.props.history.push(`/home`) 
    }

    componentDidMount() {
        if (Xtorage.local.get('user')) {
            logic.token = Xtorage.local.get('user').token
            logic.id = Xtorage.local.get('user').id
            logic.retrieve()
                .catch(alert('you already logged'))
                .then(this.props.history.push(`/home`))
        }
    }

    render() {
        const { user, password } = this.state
        return <div className="login">
            <h1>Login</h1>
            <form onSubmit={this.submit}>
                <input type="text" onChange={this.userName} value={user} placeholder="User" autoComplete="off"/>
                <input type="password" onChange={this.userPassword} value={password} placeholder="Password" autoComplete="off"/>
                <button type="submit">Login</button>
            </form>
        </div>
    }
}

export default withRouter(Login)