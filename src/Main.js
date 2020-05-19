import React from 'react';
import Sidebar from './Sidebar';
import Note from './Note';



export default function MainRoute(props) {
    return(
        <section className="main">
            <Note notes={props.notes}/>    
        </section> 
        
    )
}