import actionTypes from './actionTypes'

export function setUser(userObj) {
    console.log("IN SET USER 1", userObj)
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
        })
            .then(response => response.json())
            .then(userData => {
                console.log("IN SET USER 2", userData)
                localStorage.setItem("token", userData.jwt)
                localStorage.setItem("user_id", userData.user.id)
                dispatch({ type: actionTypes.currentUser, payload: userData })
            })
            .catch(console.log)
    }
}

export function refreshUser(userObj) {
    console.log("UPDATE USER:", userObj)
    return function (dispatch) {
        dispatch({ type: actionTypes.refreshUser, payload: userObj })
    }
}