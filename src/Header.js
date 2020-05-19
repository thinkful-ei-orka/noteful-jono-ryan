import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
    return(
        <header>
            <NavLink className='navlink' to='/'>Noteful</NavLink>
        </header>
    )
}