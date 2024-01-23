import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({isActive})=> isActive ? "text-decoration-underline text-primary" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;