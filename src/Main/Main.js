import React from 'react';
// import Sidebar from '../Sidebar/Sidebar';
import Note from './Note';
import AddNote from './AddNote'
import UserContext from '../UserContext'
import NotefulError from '../NotefulError';
import PropTypes from 'prop-types'


class MainRoute extends React.Component {
    static contextType = UserContext;
    // This will llikely change in refactor
    
    render() {
        console.log(this.props.showDescription)
        const {addNote} = this.context
    if (addNote) {
        return (
            <section className="main">
                <NotefulError>
                    <AddNote />   
                </NotefulError>
            </section>
        )
    } 
    else {
    return(
        <section className="main">
            <NotefulError>
                <Note showDescription={this.props.showDescription} noteId={this.props.match.params.noteId} folderId ={this.props.match.params.folderId} notes={this.props.notes}/>
            </NotefulError>
        </section> 
        
    )
    }
    }
}

MainRoute.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
    folderId: PropTypes.string
}

export default MainRoute;