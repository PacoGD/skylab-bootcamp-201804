import React from 'react';
// import '../App.css';
// import App from '../App'
import { withRouter } from 'react-router-dom'
// import logic from '../logic'
import Xtorage from './Xtorage';

function Home (props) {
    

    return (
        <div className="home">
            {(Xtorage.local.get('user'))?
            (
                <h1>I'm home</h1>
            ):(
                <div>
                    <p>You need to log in.</p>
                    <button onClick={(e) => { e.preventDefault(); props.history.push(`/login`)}}> Login </button>
                </div>
            )}        
        </div>
    )
}

export default withRouter(Home)