import React from 'react';
import '../App.css';
import App from '../App'
import logic from '../logic'

function Home (props) {
    return (
        <div className="Home">
              <Link to="/register">Register</Link>

            <input id="formtext" text="your username" type="text" placeholder="your username" onChange={props.login.username} />

            <input id="formtext" text="your password" type="text" placeholder="your password" onChange={props.login.password} />

            <button type='submit' id="button">Login</button>
        </div>
    )
}

export default Login