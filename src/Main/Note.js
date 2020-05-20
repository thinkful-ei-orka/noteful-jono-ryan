import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';


export default function Note(props) {
    return(
        <section>
            {props.notes.map(note => 
            <div className='noteItem' key={note.id} >
            <NavLink className='navlink note-name' to={'/note/' + note.id}>{note.name}</NavLink>
            <p className='date'>{`Date modified on ${moment(note.modified).format('MMM D YYYY')}`}</p>
            <button className='delete-note'>Delete Note</button>
            {props.showDescription ? (<p>{note.content}</p>): ''}
            </div>
            
            )}
            <button className="Add-note">Add Note</button>

        </section>
    )
}