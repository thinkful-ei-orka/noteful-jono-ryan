import React from 'react';
// import Sidebar from '../Sidebar/Sidebar';
import Note from './Note';



export default function MainRoute(props) {
    return(
        <section className="main">
            <Note showDescription={props.showDescription} noteId={props.match.params.noteId} folderId ={props.match.params.folderId} notes={props.notes}/>    
        </section> 
        
    )
}