const initialNotesValue = []

const notesReducer = (state = initialNotesValue, action) => {
    switch(action.type) {

        case 'ADD_NOTE' : {
            return [...state, {...action.payload}]
        }

        case 'GET_NOTES' : {
            return [...action.payload, ...state]
        }

        case 'REMOVE_NOTE' : {
            const result = [...state].filter(ele => {
                return ele._id !== action.payload
            })
            return [...result]
        }

        default : {
            return [...state]
        }
    }
}

export default notesReducer