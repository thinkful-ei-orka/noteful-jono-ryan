import React from 'react';
import FolderList from './FolderList';
import UserContext from '../UserContext'
import AddFolder from './AddFolder'
import NotefulError from '../NotefulError';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
    static contextType = UserContext;
    
    render() {
        const {folders, addFolder, renderAddFolder} = this.context
        if(addFolder) {
            return (
                <section className='sidebar'>
                    <NotefulError>
                        <AddFolder />
                    </NotefulError>
                </section>
            )
        }
    return(
        <section className="sidebar">
            <FolderList folders={folders}/>
            <button className='Add-folder' onClick={renderAddFolder}>Add Folder</button>
    
        </section>
    )
    }
}

Sidebar.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object
}

export default Sidebar;