import React from 'react';


export default function GoBack(props) {
    console.log(props)
    return (
        <div>
            <button>Go back!</button>
            <h2>{props.folderName}</h2>
        </div>
    )
}