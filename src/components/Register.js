import React, {useState} from 'react'
import swal from 'sweetalert'
import {useDispatch} from 'react-redux'
import validator from 'validator'
import {startSetUser} from '../actions/usersActions'

const Register = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        } else if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const validations = () => {
        if(username.trim().length === 0 || email.trim().length === 0 ) {
            errors.empty = 'Field cannot be left blank'
            swal('Check empty fields', '', 'error')
        }
        else if (!validator.isEmail(email)) {
            errors.email = 'Invalid E-Mail format'
            swal('Invalid E-Mail format', '', 'error')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        validations()

        if(Object.keys(errors).length === 0) {
            setFormError({})

            const formData = {
                username: username,
                email: email,
                password: password
            }

            const reRoute = () => {
                props.history.push('/login')
            }

            dispatch(startSetUser(formData, reRoute))
            
            setUsername('')
            setPassword('')
            setEmail('')
            //setToggleRegister(false)
        } else {
            setFormError(errors)
            if(username.trim().length === 0 || email.trim().length === 0 ) {
                swal('Check empty fields', '', 'error')
            }
            else if (!validator.isEmail(email)) {
                swal('Invalid E-Mail format', '', 'error')
            }
        }
    }

    

    return (
        <div className='register_div'>
            <h2> Register with us </h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='enter username'
                    value={username}
                    onChange={handleChange}
                    name='username'
                />  <br/> <br/>
                
                <input 
                    type="text"
                    placeholder='enter email'
                    value={email}
                    onChange={handleChange}
                    name='email'
                /> <br/> <br/>
    
                <input 
                    type="password"
                    placeholder='enter password'
                    value={password}
                    onChange={handleChange}
                    name='password'
                /> <br/> <br/>

                <input type='submit' />

            </form>
        </div>
    )
}

export default Register
