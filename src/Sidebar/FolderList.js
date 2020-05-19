import React from 'react';
import { NavLink } from 'react-router-dom';
// import Note from '../Main/Note';

export default function FolderList(props) {
    //We need only the notes that match the selected folder. Use filter.
    return(
        <section className="folder-list">
        {props.folders.map(folder=> 
            <div className='folder' key={folder.id}>
                <NavLink className='navlink' to={'/folder/' + folder.id} >{folder.name}</NavLink>
            </div>
            )}  
        </section>
    )
}