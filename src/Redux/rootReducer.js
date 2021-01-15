import { combineReducers } from 'redux'

const defaultState = {
    currentUser: null,
    thoughtsArray: []
}

function setUser(state = defaultState.currentUser, action) {
    switch (action.type) {
        case "SET_USER":
            return (action.payload)
        default:
            return state
    }
}

function getThoughtsData(state = defaultState.thoughtsArray, action) {
    switch (action.type) {
        case "GET_THOUGHTS":
            return (action.payload)
        default:
            return state
    }
}

const rootReducer = combineReducers({
    currentUser: setUser,
    thoughtsArray: getThoughtsData 
})

export default rootReducer