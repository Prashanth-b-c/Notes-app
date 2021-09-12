import axios from 'axios'
import swal from 'sweetalert'

export const startSetUser = (userData, routeFunc) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/register', userData)
            .then((response) => {
                const result = response.data
                if(result.hasOwnProperty('errors')) {
                    swal(result.message)
                } else {
                    dispatch(setUser(result))
                    routeFunc()
                    swal('Successfully created an account!', "", 'success')
                }
            })
            .catch((err) => {
                swal(err.message)
            })
    }
    
}

export const startSetLogin = (userData, routeFunc) => {
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/users/login', userData)
            .then(response => {
                const result = response.data
                if (result.hasOwnProperty('errors')) {
                    swal({
                        title : 'Error Detected',
                        text : result.errors,
                        icon : 'error'
                    })
                } else {
                    localStorage.setItem('token', result.token)
                    dispatch(toggleLogin())
                    routeFunc()
                    swal('Successfully logged in!','', 'success')
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}

export const startAddNote = (noteObj) => {
    console.log('hello')
    return (dispatch) => {
        axios.post('http://dct-user-auth.herokuapp.com/api/notes', noteObj, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then(response => {
            const result = response.data
            dispatch(addNote(result))
        })
        .catch(err => {
            alert(err.message)
        })
    }
}

export const startAccount = () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/users/account', {
            headers: {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data
            console.log(result)
            dispatch(setAccount(result))
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startGetNotes = () => {
    return (dispatch) => {
        axios.get('http://dct-user-auth.herokuapp.com/api/notes', {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then(response => {
            const result = response.data
            dispatch(getNotes(result))
        })
    }
}

export const startRemoveNote = (id) => {
    return (dispatch) => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove) {
            axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
                headers : {
                    'x-auth' : localStorage.getItem('token')
                }
            })
            .then(response => {
                const result = response.data
                dispatch(removeNote(result._id))
            })
            .catch(err => {
                alert(err.message)
            })
        }
    }
}

export const removeNote = (id) => {
    return {
        type: 'REMOVE_NOTE',
        payload: id
    }
}

export const addNote = (noteObj) => {
    return {
        type : 'ADD_NOTE',
        payload: noteObj
    }
}

export const getNotes = (notesArr) => {
    return {
        type : 'GET_NOTES',
        payload: notesArr
    }
}

export const setAccount = (info) => {
    return {
        type: 'ADD_INFO',
        payload: info
    }
}

export const removeToken = () => {
    return {
        type: 'REMOVE_TOKEN'
    }
}

export const setUser = (usersInfo) => {
    return {
        type: 'SET_USER',
        payload: usersInfo
    }
}

export const toggleLogin = () => {
    return {
        type : 'TOGGLE_LOGIN'
    }
}