import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducer'
import userReducer from '../reducers/userReducer'
import loggedInReducer from '../reducers/loggedInReducer'
import notesReducer from '../reducers/notesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        loggedIn: loggedInReducer,
        user: userReducer,
        notes: notesReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore