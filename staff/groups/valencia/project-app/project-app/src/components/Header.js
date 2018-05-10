import React from 'react';
import { Link } from 'react-router-dom'
// import logic from '../logic'
import Xtorage from './Xtorage';

function Header() {

    const landingNav = (
        <nav>
            <img class="logoHeader" src="http://www.zonanegativa.com/imagenes/2012/05/4146.jpg" />
            <Link to="/">Landing</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

        </nav>
    )


    const regularNav = (
        <nav>
            <img class="logoHeader" src="http://www.zonanegativa.com/imagenes/2012/05/4146.jpg" />
            <Link to="/">Landing</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/home">Home</Link>
        </nav>
    )


    return (
        <header>
            {(Xtorage.local.get('user')) ? regularNav : landingNav}
        </header>
    )
}

export default Header
