import { combineReducers } from 'redux'

const defaultState = {
    currentUser: null,
    allThoughts: [],
    fiveThoughts: [],
    myThoughts: []
}

function setUser(state = defaultState.currentUser, action) {
    switch (action.type) {
        case "SET_USER":
            return (action.payload)
        case "REFRESH_USER":
            return (action.payload)
        default:
            return state
    }
}

function getThoughtsData(state = defaultState.allThoughts, action) {
    switch (action.type) {
        case "ALL_THOUGHTS":
            return (action.payload)
        default:
            return state
    }
}

function getFiveThoughts(state = defaultState.fiveThoughts, action) {
    switch (action.type) {
        case "GET_THOUGHTS":
            return (action.payload)
        default:
            return state
    }
}

function getMyThoughts(state = defaultState.myThoughts, action) {
    switch (action.type) {
        case "MY_THOUGHTS":
            return (action.payload)
        default:
            return state
    }
}

const rootReducer = combineReducers({
    currentUser: setUser,
    allThoughts: getThoughtsData,
    fiveThoughts: getFiveThoughts,
    myThoughts: getMyThoughts
})

export default rootReducer