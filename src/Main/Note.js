import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import UserContext from '../UserContext'
import PropTypes from 'prop-types';

class Note  extends React.Component {
    static contextType = UserContext;
    
    render() {
        const {notes, deleteNote, renderAddNote} = this.context
        let filteredNotesByNote = notes.filter(note => note.id === this.props.noteId)
        let filteredNotesByFolder = notes.filter(note=> note.folderId === this.props.folderId)
        let notesList = []
        let showDescription = false
        // conditional rendering for filtering notes by folder and showing one selected note
        if (this.props.folderId) {
            notesList = filteredNotesByFolder
        }
        else if (this.props.noteId) {
            notesList = filteredNotesByNote 
            showDescription = true
        } else {
        notesList = notes
        }

    return(
        <section>
            {notesList.map(note => 
            <div className='noteItem' key={note.id} >
            <NavLink className='navlink note-name' to={'/note/' + note.id}>{note.name}</NavLink>
            <p className='date'>{`Date modified on ${moment(note.modified).format('Do MMM YYYY')}`}</p>
            <button className='delete-note' onClick={() => deleteNote(note.id)}>Delete Note</button>
            {showDescription ? (<p>{note.content}</p>): ''}
            </div>
            
            )}
            <button className="Add-note" onClick={renderAddNote}>Add Note</button>
        </section>
    )
}
}

Note.propTypes = {
    date: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: (props, propName, componentName) => {
        const prop = props[propName];
        if(!prop) {
            return new Error(`${propName} is required in ${componentName}. Validation Failed`);
        }
        if (typeof prop != 'string') {
            return new Error(`Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`);
        }
        if (prop.length === 0) {
        return new Error(`Invalid prop, ${propName} must be entered. Validation Failed.`);
        }
    }
}


export default Note;
