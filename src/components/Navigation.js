import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/">Acceuil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        </div>
    );
};

export default Navigation;