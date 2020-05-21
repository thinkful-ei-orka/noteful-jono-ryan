import React from 'react';
import { NavLink } from 'react-router-dom';

export default function GoBack(props) {
    console.log(props)
    return (
        <div>
            <NavLink  className='navlink go-back' to='/'>Go Back!</NavLink>
            <h2>{props.folderName}</h2>
        </div>
    )
}