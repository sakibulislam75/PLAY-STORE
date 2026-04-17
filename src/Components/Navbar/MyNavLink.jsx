import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to,children}) => {
    return (
        <div>
             <NavLink to={to} className={(props) => `${props.isActive ? 'text-purple-500 border-b border-purple-500' : ''}`} >
                {children}
             </NavLink>
             
        </div>
    );
};

export default MyNavLink;