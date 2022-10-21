import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css'

const Header = () => {
    const activeClass = {
        fontWeight: "bold",
        color: "lime",
    };
    return (
        <nav>
            <NavLink to='/home'
                activeStyle={activeClass}
            >Home</NavLink>
            <NavLink to='/friends'
                activeStyle={activeClass}
            >Friends</NavLink>
            <NavLink to='/about'
                activeStyle={activeClass}>About
            </NavLink>
            <NavLink to='/about/culture'
                activeStyle={activeClass}>
                Culture</NavLink>
        </nav>
    );
};

export default Header;