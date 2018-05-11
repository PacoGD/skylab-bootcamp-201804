import React from 'react';
// import '../App.css';
// import App from '../App'
import { withRouter } from 'react-router-dom'
// import logic from '../logic'
import Xtorage from './Xtorage';
import SearchCountry from './SearchCountry';
import ShowCities from './ShowCity';

function Home(props) {


    return (
        <div className="home">
            {(Xtorage.local.get('user')) ?
                (
                    <div>
                        
                        {/* <img className="underconstruction"src="https://i.pinimg.com/736x/c1/fa/18/c1fa18f640401b16e68a5ad245ef22ea--mariana-comic-book.jpg" /> */}
                        <SearchCountry/>
                        {/* <ShowCities handlerCity={"ES"}/> */}
                    </div>
                ) : (
                    <div>
                        <p>You need to log in.</p>
                        <button onClick={(e) => { e.preventDefault(); props.history.push(`/login`) }}> Login </button>
                    </div>
                )}
        </div>
    )
}

export default withRouter(Home)