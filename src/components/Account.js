import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAccount } from '../actions/usersActions'

const Account = (props) => {

    const dispatch = useDispatch()

    const user = useSelector((state) => {
        return state.user
    })

    useEffect(() => {
        dispatch(startAccount())
    },[])

    return (
        <div>
            <h2> User Account </h2>
            <p> E-Mail : {user.email}  </p>
            <p> Username : {user.username} </p>
        </div>
    )
}

export default Account
