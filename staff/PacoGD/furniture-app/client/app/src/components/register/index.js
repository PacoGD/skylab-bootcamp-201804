import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import api from 'api';

api.url = 'http://localhost:5000/api'

class Register extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: ""
}
inputValues = (e) => {
    let prop = e.target.name
    this.setState({ [prop]: e.target.value })
}

submit = (e) => {
    e.preventDefault()
    api.registerUser(this.state.username, this.state.name, this.state.surname, this.state.email, this.state.password)
        .then(() => {
            this.props.history.push(`/login`)
        })
        .catch(error => {
            console.error(error)
            this.props.history.push(`/register`)

        })
}
  render() {
    return (
      <div className="Register">    
                <h1>Register</h1>
                <form onSubmit={this.submit}>
                    <input type="text" name="username" placeholder="username" onChange={this.inputValues} />
                    <input type="password" name="password" placeholder="password" onChange={this.inputValues} />
                    <input type="email" name="email" placeholder="email" onChange={this.inputValues} />
                    <input type="text" name="name" placeholder="name" onChange={this.inputValues} />
                    <input type="text" name="surname" placeholder="surname" onChange={this.inputValues} />
                    <button type="submit">Register</button>
                </form>         
      </div>
    );
  }
}

export default  withRouter(Register);
