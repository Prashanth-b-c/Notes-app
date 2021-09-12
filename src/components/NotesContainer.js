import React from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

const NotesContainer = (props) => {

    return (
        <div>
            <NoteForm />
            <NoteList />
        </div>
    )
}

export default NotesContainer
