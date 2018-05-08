import React, { Component } from 'react';
import '../App.css';
import App from '../App'
import logic from '../logic'

class Register extends Component {
    state = {
        user: '',
        password: '',


    }


    render() {
        return <section>
            <h2>Register</h2>
            <form onSubmit = {this }>
                <input type="text" /* onChange={this.user} value={} */ placeholder="User name" />
                <input type="text" /* onChange={this.user} value={} */ placeholder="Your e-mail" />
                <input type="text" /* onChange={this.user} value={} */ placeholder="Confirm your e-mail" />
                <input type="text" /* onChange={this.password} value={} */ placeholder="Password" />
                <input type="text" /* onChange={this.password} value={} */ placeholder="Confirm password" />
                <button type="submit">Register</button>
            </form>
        </section>
    }
}

export default Register