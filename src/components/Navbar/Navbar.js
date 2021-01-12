import React from 'react';
import './Navbar.css';
const Nav =()=>{
    return(
        <nav>
            <div className="logo"><h1 className="navbar-name">EasyCare</h1></div>
            <ul className="navbar-head">
                <li className="navbar-sign">Sign In</li>
                <li className="navbar-sign">Sign Up</li>
            </ul>
        </nav>
    )
}

export default Nav
