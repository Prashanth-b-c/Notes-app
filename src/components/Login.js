import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import {startSetLogin} from '../actions/usersActions'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            password: password
        }

        const reRoute = () => {
            props.history.push('/')
        }

        dispatch(startSetLogin(formData, reRoute))

    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input                  
                    type="text"
                    placeholder='Enter E-Mail'
                    value={email}
                    onChange={handleChange}
                    name='email'
                /> <br/> <br/>

                <input 
                    type="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={handleChange}
                    name='password' 
                /> <br/> <br/>

                <input type='submit' />
        
            </form>
        </div>
    )
}

export default Login
