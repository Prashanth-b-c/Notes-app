const initialLoggedInValue = false

const loggedInReducer = (state = initialLoggedInValue, action) => {
    switch(action.type) {

        case 'TOGGLE_LOGIN' : {
            return !state
        }

        default : {
            return state
        }
    }
}

export default loggedInReducer