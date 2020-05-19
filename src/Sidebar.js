import React from 'react';
import FolderList from './FolderList';
import { Route } from 'react-router-dom';

export default function Sidebar(props) {
    return(
        <section className="sidebar">
            <FolderList folders={props.folders}/>
            <button>Add Folder</button>
    
        </section>
    )
}