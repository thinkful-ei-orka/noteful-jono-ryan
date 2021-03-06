import React from 'react';
import UserContext from '../UserContext';
import PropTypes from 'prop-types';

class AddFolder extends React.Component {
    static contextType = UserContext;
    handleSubmit = (event) => {
        event.preventDefault();
        const folderName = event.target.folderName.value
        this.context.addNewFolder(folderName)
    }
    render() {
    return (
        <form className='add-folder-form' onSubmit={this.handleSubmit}>
            <label htmlFor='folder-name'>Folder Name</label>
            <input  type='text' id='folder-name' name='folderName' required></input>
            <button type='submit' className='add-folder-submit'>Submit Folder</button>
        </form>
        )
    }
}

AddFolder.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object
}

export default AddFolder;