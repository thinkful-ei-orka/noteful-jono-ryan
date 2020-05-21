import React from 'react';

function AddNote() {
    return (
        <form>
            <label htmlFor='note-name'>Note Name</label>
            <input type='text' id='note-name' required></input>
            <label htmlFor='note-content'>Note Content</label>
            <input type='text' id='note-content' required></input>
            <label htmlFor='note-folder'>Note Folder</label>
            <input type='text' id='note-folder'></input>
            <button type='submit' className='add-note-submit'>Submit Note</button>
        </form>
    )
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