import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetNotes } from '../actions/usersActions'
import Note from './Note'

const NoteList = (props) => {

    const dispatch = useDispatch()

    const notes = useSelector(state => {
        return state.notes
    })

    useEffect(() => {
        dispatch(startGetNotes())
    }, [])

    return (
        <div>
            <ul>
                {
                    notes.map(note => {
                        return <li key={note._id}> <Note {...note} /> </li> 
                    })
                }
            </ul>
            
        </div>
    )
}

export default NoteList