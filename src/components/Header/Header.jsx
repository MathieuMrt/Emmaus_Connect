import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="comp1">Comp1</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;