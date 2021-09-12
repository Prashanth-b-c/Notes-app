const initialUserValue =  {}

const userReducer = (state = initialUserValue, action) => {
    switch(action.type) {

        case 'ADD_INFO' : {
            return  {...action.payload}
        }

        default : {
            return {...state}
        }
    }
}

export default userReducer