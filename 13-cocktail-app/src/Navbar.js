import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <NavLink exact activeClassName="active_class" to="/">
                        <h1>Cocktail App</h1>
                    </NavLink>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="active_class" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;