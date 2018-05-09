import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../logic'
// import SweetAlert from 'sweetalert-react';

class Register extends Component {
    
    state = {
        username : "",
        pass : "",
        _pass : "",
        mail : "",
        _mail : "",
        exists : false,
        register : false,
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

        logic.register(username, pass)
            .then(res => {
                if (res.status === "KO"){
                    this.setState({exists : true}) 
                } else {
                    this.props.history.push(`/login`)
                }
            })   
    }

    render() {
        const { username, pass, _pass } = this.state

        return (
            <div className="register">
            <h1>Register</h1>
                <form onSubmit={this.submit}>
                    <input type="text" onChange={this.inputValues} name="username" value={username} placeholder="User name" autoComplete="off"/>
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