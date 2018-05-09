import React from 'react';
// import '../App.css';
// import App from '../App'
import { withRouter } from 'react-router-dom'
import logic from '../logic'

function Home (props) {
    

    return (
        <div className="home">
            {(logic.token === '')?
            (
                <div>
                    <p>You need to log in.</p>
                    <button onClick={(e) => { e.preventDefault(); props.history.push(`/login`)}}> Login </button>
                </div>
            ):(
                <h1>I'm home</h1>
            )}        
        </div>
    )
}

export default withRouter(Home)