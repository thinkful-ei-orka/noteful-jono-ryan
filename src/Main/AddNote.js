import React from 'react';
import UserContext from '../UserContext';

class AddNote extends React.Component {
    static contextType = UserContext;
    render() {
        const {folders, addNewNote} = this.context
    return (
        <form className='add-note-form' onSubmit={addNewNote}>
            
            <label htmlFor='note-name'>Name:</label>
            <input type='text' id='note-name'  required className='note-input'></input>

            <label htmlFor='note-content'>Content:</label>
            <input type='text' id='note-content' required className='note-input'></input>
            
            <label htmlFor='note-folder'>Folder:</label>
            <select id='note-folder' className='note-input'>
                {folders.map(folder => {
                    return <option value={folder.id}>{folder.name}</option>
                })}
            </select>

            <button type='submit' className='add-note-submit'>Submit Note</button>
        </form>
        )
    }
}

export default AddNote;

// validateSsn = () => {
//     let ssn = this.state.ssn.value;
//     ssn = ssn.replace(/[\s-]/g, ''); // Remove whitespace and dashes
//     if (ssn.length !== 9) {
//         // Check if it's 9 characters long
//         return 'SSN must be 9 digits long';
//     } else if (!/^\d+$/.test(ssn)) {
//         // Check if it's just digits
//         return 'SSN must only contain numbers';
//     }
// }