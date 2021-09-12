import React from 'react'
import swal from 'sweetalert'
import {Link, Route, withRouter} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import NotesContainer from './NotesContainer'
import { removeToken, toggleLogin } from '../actions/usersActions'

const NavBar = (props) => {

    const dispatch = useDispatch()

    const toggleLoginState = useSelector((state) => {
        return state.loggedIn
    })

    return (
        <div className="container p-3 my-3 border">
            <div >

                <Link to='/' > Home </Link>

                {
                    toggleLoginState ? (
                        <>
                            <Link to='/account' > Account </Link> 
                            <Link to='/mynotes' > My Notes </Link>
                            <Link to='/' onClick={
                                () => {
                                    dispatch(removeToken())
                                    dispatch(toggleLogin())
                                    localStorage.removeItem('token')
                                    swal('Successfully logged out!', '', 'success')
                                    props.history.push('/')
                                }
                            } > Logout </Link>
                        </>
                    ) : (
                        <> 
                            <Link to='/register' > Register </Link>
                            <Link to='/login' > Login </Link>
                        </>
                    )
                }
            </div>

                <Route path='/' component={Home} exact={true} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/account' component={Account} />
                <Route path='/mynotes' component={NotesContainer} />
            
        </div>
    )
}

const WrappedComponent = withRouter(NavBar)

export default WrappedComponent