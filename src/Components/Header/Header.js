import React from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to='/home'
                activeStyle={{
                    fontWeight: "bold",
                    color: "lime"
                }}
            >Home</NavLink>
            <NavLink to='/friends'
                activeStyle={{
                    fontWeight: "bold",
                    color: "lime"
            }}
            >Friends</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    );
};

export default Header;