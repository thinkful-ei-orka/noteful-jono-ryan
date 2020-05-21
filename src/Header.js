import React from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from './UserContext'

class Header extends React.Component {
    static contextType = UserContext;

    render(){
        const {renderNote} = this.context;
    return(
        <header>
            <NavLink onClick={renderNote} className='navlink' to='/'>Noteful</NavLink>
        </header>
        )
    }
}

export default Header;