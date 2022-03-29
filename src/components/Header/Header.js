import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <>
            <header>
                <p>Aym App</p>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/manual'>Manual</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li><NavLink to='/sudo'>Sudo</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;