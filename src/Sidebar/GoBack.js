import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function GoBack(props) {
    console.log(props)
    return (
        <div>
            <NavLink  className='navlink go-back' to='/'>Go Back!</NavLink>
            <h2>{props.folderName}</h2>
        </div>
    )
}

GoBack.propTypes = {
    folder: PropTypes.string
}

export default GoBack;