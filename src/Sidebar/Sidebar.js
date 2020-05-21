import React from 'react';
import FolderList from './FolderList';
import UserContext from '../UserContext'
import AddFolder from './AddFolder'

class Sidebar extends React.Component {
    static contextType = UserContext;
    
    render() {
        const {folders, addFolder, renderAddFolder} = this.context
        if(addFolder) {
            return (
                <section className='sidebar'>
                    <AddFolder />
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

export default Sidebar;