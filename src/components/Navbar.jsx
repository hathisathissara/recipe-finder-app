import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo">
                    RecipeFinder 🍲
                </NavLink>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/favorites"
                            className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
                        >
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;