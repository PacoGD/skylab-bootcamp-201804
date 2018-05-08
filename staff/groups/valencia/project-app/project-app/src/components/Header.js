import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Landing</Link>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/register">Register</Link>
                <Link to="/home">Home</Link>
            </nav>
        </header>
    )
}

export default Header