import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';
import App from '../App'
import logic from '../logic'

function Register(props) {
    return (
        <div className="register">
        <h1>I'm register</h1>
          {/* <Link to="/register">Register</Link>

            <form>
                <input id="formtext" text="your username" type="text" placeholder="your username" onChange={props.register.username} />

                <input id="formtext" text="your password" type="text" placeholder="your password" onChange={props.register.password} />

                <button type='submit' id="button">Create Account</button>
            </form> */}
        </div>
    )
}

export default Register