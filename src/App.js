import React from 'react';
import Header from './Header';
import Main from './Main/Main'
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar';
import GoBack from './Sidebar/GoBack'
import UserContext from './UserContext'
import {withRouter} from 'react-router'

const baseUrl = 'http://localhost:9090';

class App extends React.Component {
  state= {
    folders: null,
    notes: null,
    addNote: false,
    addFolder: false
  }
  
  componentDidMount() {
    fetch(baseUrl + '/folders')
    .then(res => res.json())
    .then(resJson => {
      // console.log(resJson)
      this.setState({
        folders: resJson
      })
    })
    fetch(baseUrl + '/notes')
    .then(res => res.json())
    .then(resJson => {
      this.setState({
        notes: resJson
      })
    })
  }
  
  addNoteState = () => {
    this.setState({
      addNote: true
    })
  }

  noteState = () => {
    this.setState({
      addNote: false
    })
  }

  addFolderState = () => {
    this.setState({
      addFolder: true
    })
  }

  folderState = () => {
    this.setState({
      addFolder: false
    })
  }

  addNewNote = (name, content, folder) => {
    const newNote = {
      name: name,
      content: content,
      folder: folder
    }
    console.log(newNote)
    const newNotes = [...this.state.notes, newNote]
    let newNoteString = JSON.stringify(newNote)
    return fetch(`${baseUrl}/notes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'},
      body: newNoteString
    }).then(() => {
    this.setState({
      notes: newNotes,
      addNote: false
    })
    })
  }

  addNewFolder = (name) => {
    const newFolder = {
      name: name
    }
    console.log(newFolder)
    const newFolders = [...this.state.folders, newFolder]
    let newFolderString = JSON.stringify(newFolder)
    return fetch(`${baseUrl}/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'},
      body: newFolderString
    }).then(() => {
    this.setState({
      folders: newFolders,
      addFolder: false
    })
    })
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note => 
      note.id !== noteId
      )
      this.setState({
        notes: newNotes
      })
      this.props.history.push('/')
      fetch(baseUrl + `/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
  }

  render(){
    if(this.state.folders === null || this.state.notes === null) {
      return <p>Still Loading</p>
    }
    return (
      <UserContext.Provider value={{
        folders: this.state.folders,
        notes: this.state.notes,
        deleteNote: this.deleteNote,
        addNote: this.state.addNote,
        renderAddNote: this.addNoteState,
        renderNote: this.noteState,
        addNewNote: this.addNewNote,
        addFolder: this.state.addFolder,
        renderAddFolder: this.addFolderState,
        renderFolder: this.folderState,
        addNewFolder: this.addNewFolder
      }} >
  
    <main className='App'>
      <Header/>
      <div className="sidebar-router">
        <Route path ='/' exact component={Sidebar}/>

        <Route path ='/folder/:folderId' component={Sidebar}/>

        <Route path ='/note/:noteId' render={(routerProps) => {
          console.log(this.state)
        let note = this.state.notes.find(note => note.id ===  routerProps.match.params.noteId)
        let folder = this.state.folders.find(folder => folder.id === note.folderId)
        return <GoBack folderName={folder.name}/>
        }}/>

      </div>
      
      
      <div className="main-router">
        <Route path='/' exact component={Main}/>

        <Route path='/folder/:folderId' component={Main}/>

        <Route path='/note/:noteId' component={Main} />
        
        </div>
    </main>
    </ UserContext.Provider>
  );
}
}

export default withRouter(App);
