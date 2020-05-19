import React from 'react';
import Note from './Note';

export default function FolderList(props) {
    //We need only the notes that match the selected folder. Use filter.
    return(
        <section className="folder-list">
        {props.folders.map(folder=> 
            <div id={folder.id}>
                <h3>{folder.name}</h3>
            </div>
            )}  
        </section>
    )
}