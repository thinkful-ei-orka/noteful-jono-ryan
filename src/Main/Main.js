import React from 'react';
// import Sidebar from '../Sidebar/Sidebar';
import Note from './Note';
import AddNote from './AddNote'
import UserContext from '../UserContext'


class MainRoute extends React.Component {
    static contextType = UserContext;
    // This will llikely change in refactor
    render() {
        const {addNote} = this.context
    if (addNote) {
        return (
            <section className="main">
                <AddNote />   
            </section>
        )
    } 
    else {
    return(
        <section className="main">
            <Note showDescription={this.props.showDescription} noteId={this.props.match.params.noteId} folderId ={this.props.match.params.folderId} notes={this.props.notes}/>
        </section> 
        
    )
    }
    }
}

export default MainRoute;