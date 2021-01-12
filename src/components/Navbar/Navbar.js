import React from 'react';
import './Navbar.css';
const Nav =()=>{
    return(
        <nav>
            <div className="logo"><h1 className="navbar-name">EasyCare</h1></div>
            <ul className="navbar-head">
                <li className="navbar-sign"><button className="navbar-signIn-button">Sign In</button></li>
                <li className="navbar-sign"><button className="navbar-signup-button">Sign Up</button></li>
                
            </ul>
        </nav>
    )
}

export default Nav
