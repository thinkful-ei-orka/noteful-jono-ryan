import React from 'react';
import FolderList from './FolderList';

export default function Sidebar(props) {
    return(
        <section className="sidebar">
            <FolderList folders={props.folders}/>
            <button className='Add-folder'>Add Folder</button>
    
        </section>
    )
}