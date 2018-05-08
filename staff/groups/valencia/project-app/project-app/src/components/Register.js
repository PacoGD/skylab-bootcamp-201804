import React, { Component } from 'react'
import '../App.css';
import { withRouter } from 'react-router-dom'
// import App from '../App'
import logic from '../logic/index'

class Register extends Component {
    
    state = {
        username : "",
        pass : "",
        _pass : "",
        mail : "",
        _mail : "",
        data : {}
    }
    

    inputValues = (e) => {
        let prop = e.target.name
        this.setState({ [prop]: e.target.value })
    }


    submit = (e) => {
        e.preventDefault()
        const { username, pass, _pass, mail, _mail} = this.state

        if (pass !==  _pass) throw Error("Los passwords no son iguales")
        if (mail !==  _mail) throw Error("Los mails no son iguales")

        logic.register(this.state.username, this.state.pass)
            .then(this.props.history.push(`/login`))
    }

    render() {
        const { username, pass, _pass, mail, _mail, data } = this.state

        return (
            <div className="register">
            <h1>Register</h1>
                <form onSubmit={this.submit}>
                    <input type="text" onChange={this.inputValues} name="username" value={username} placeholder="User name" />
                    <input type="password" onChange={this.inputValues} name="pass" value={pass} placeholder="Password" />
                    <input type="password" onChange={this.inputValues} name="_pass" value={_pass} placeholder="Confirm your password" />
                    {/* <input type="email" onChange={this.inputValues} name="mail" value={mail} placeholder="Your e-mail" />
                    <input type="email" onChange={this.inputValues} name="_mail" value={_mail} placeholder="Confirm e-mail" /> */}
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Register)