import React from 'react';
import FolderList from './FolderList';
import UserContext from '../UserContext'

class Sidebar extends React.Component {
    static contextType = UserContext;
    
    render() {
        const {folders} = this.context
    return(
        <section className="sidebar">
            <FolderList folders={folders}/>
            <button className='Add-folder'>Add Folder</button>
    
        </section>
    )
    }
}

export default Sidebar;