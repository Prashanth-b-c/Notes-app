import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { startAddNote } from '../actions/usersActions'

const NoteForm = (props) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else if (e.target.name === 'body') {
            setBody(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: title,
            body: body
        }

        dispatch(startAddNote(formData))

        setTitle('')
        setBody('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <h3> Add Note </h3>
                <input 
                    type="text" 
                    placeholder='Enter Note Title'
                    value={title}
                    name='title'
                    onChange={handleChange}
                /> <br/> <br/>
                <textarea 
                    name="body"
                    value={body}
                    onChange={handleChange}
                    placeholder='Enter note here... '
                    cols="20" 
                    rows="10"
                > </textarea> <br/> <br/>
                <input 
                    type="submit"
                    value='Save'
                />
            </form>
        </div>
    )
}

export default NoteForm