import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import App from '../App'
import logic from '../logic/index'
// import 'animate.css'
import swal from 'sweetalert2'

class Register extends Component {

    state = {
        username: "",
        pass: "",
        _pass: "",
        mail: "",
        _mail: "",
        exists: false,
        register: false,
        data: {}
    }


    inputValues = (e) => {
        let prop = e.target.name
        this.setState({ [prop]: e.target.value })
    }


    submit = (e) => {
        e.preventDefault()
        const { pass, _pass } = this.state

        let msg = ''
        let error = false
        let successMsg = '<p>Registered Successful!</p>'

        if (pass !== _pass) {
            error = true;
            msg += '<p>Something went wrong!</p>'
        }

        if (error) {
            swal({
                type: 'error',
                title: 'Oops... ',
                html: msg,
                animation: true,
                customClass: 'animated flipInX'
            })
        } else {
            logic.register(this.state.username, this.state.pass)
                .then(
                    swal({
                        type: 'success',
                        title: 'Congrats!',
                        html: successMsg,
                        animation: true,
                        customClass: 'animated flipInX'
                    })
                )
                .then(this.props.history.push(`/login`))
        }
    }

    render() {
        const { username, pass, _pass } = this.state

        return (
            <div className="register">
                <h1>Register</h1>
                <form onSubmit={this.submit}>
                    <input type="text" onChange={this.inputValues} name="username" value={username} placeholder="User name" autoComplete="off" />
                    <input type="password" onChange={this.inputValues} name="pass" value={pass} placeholder="Password" />
                    <input type="password" onChange={this.inputValues} name="_pass" value={_pass} placeholder="Confirm your password" />
                    <button type="submit">Register</button>
                </form>
                {
                    this.state.exists && <p>El usuario introducido ya existe.</p>
                }
            </div>
        )
    }
}

export default withRouter(Register)