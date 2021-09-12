import React from 'react'
import swal from 'sweetalert'
import { useDispatch } from 'react-redux'
import { startRemoveNote } from '../actions/usersActions'

const Note = (props) => {

    const {_id, title, body} = props

    const dispatch = useDispatch()
    
    const handleAlert = () => {
        swal({
            title: title,
            text: body,
            icon: 'info'
        })
    }

    const handleDelete = () => {
        dispatch(startRemoveNote(_id))
    }

    return (
        <div>
            <h4 onClick={handleAlert} > {title} </h4>
            <button onClick={handleDelete} > Delete </button>
        </div>
    )
}

export default Note
