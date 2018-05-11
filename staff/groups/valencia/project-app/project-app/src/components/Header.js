import React from 'react';
import { Link } from 'react-router-dom'
// import logic from '../logic'
import Xtorage from './Xtorage';

function Header() {

    const landingNav = (
        <nav>
            <Link to="/"><img class="logoHeader" src="https://i.pinimg.com/originals/00/e6/69/00e66922848d057335a4655e9bee2f9c.jpg" /></Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>

        </nav>
    )


    const regularNav = (
        <nav>
            <Link to="/"><img class="logoHeader" src="https://i.pinimg.com/originals/00/e6/69/00e66922848d057335a4655e9bee2f9c.jpg" /></Link>
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
