import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import UserContext from '../UserContext'
// import AddNote from '../AddNote'

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


export default Note;
