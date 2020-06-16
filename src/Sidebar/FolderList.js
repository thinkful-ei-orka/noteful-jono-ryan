import React from 'react';
import { NavLink } from 'react-router-dom';
// import Note from '../Main/Note';
import UserContext from '../UserContext';
import PropTypes from 'prop-types';
import NotefulError from '../NotefulError';

class FolderList extends React.Component {
    //We need only the notes that match the selected folder. Use filter.
    static contextType = UserContext;

    render() {
        const {folders} = this.context
        return(
        <section className="folder-list">
        {folders.map(folder=> 
            <div className='folder' key={folder.id}>
                <NotefulError>
                    <NavLink className='navlink' to={'/folder/' + folder.id} >{folder.name}</NavLink>
                </NotefulError>
            </div>
            )}  
        </section>
    )
    }
    
}
FolderList.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.object)
}
export default FolderList;