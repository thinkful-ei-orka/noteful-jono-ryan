import React from 'react';

function AddFolder() {
    return (
        <form>
            <label htmlFor='folder-name'>Folder Name</label>
            <input  type='text' id='folder-name' name='folder' required></input>
        </form>
    )
}

export default AddFolder;