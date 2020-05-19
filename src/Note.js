import React from 'react';

export default function Note(props) {
    return(
        <section>
            {props.notes.map(note => 
            <div id={note.id} folderId={note.folderId}>
            <h2>{note.name}</h2>
            <p>{`Date modified on ${note.modified}`}</p>
            <button>Delete Note</button>
            <p>{note.content}</p>
            </div>
            
            )}
            <button className="Add">Add Note</button>

        </section>
    )
}