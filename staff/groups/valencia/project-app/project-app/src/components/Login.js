import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';
import App from '../App'
import logic from '../logic'

function Login (props) {
    return (
        <div className="Login">
              <Link to="/register">Register</Link>

            <input id="formtext" text="your username" type="text" placeholder="your username" onChange={props.login.username} />

            <input id="formtext" text="your password" type="text" placeholder="your password" onChange={props.login.password} />

            <button type='submit' id="button">Login</button>
        </div>
    )
}

export default Login