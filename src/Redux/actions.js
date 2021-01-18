import actionTypes from './actionTypes'

// =========================== USER FUNCTION =========================================//

export function setUser(userObj) {
    // console.log("IN SET USER 1", userObj)
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
    // console.log("UPDATE USER:", userObj)
    return function (dispatch) {
        dispatch({ type: actionTypes.refreshUser, payload: userObj })
    }
}

// =========================== THOUGHTS FUNCTION =========================================//
function randomizer(array) {
    let len = array.length;
    while (len) {
        const randomNum = Math.floor(Math.random() * len--);
        [array[len], array[randomNum]] = [array[randomNum], array[len]];
    }
    return array.slice(0, 5);
}

export function browseThoughts(userId) {
    // console.log(userId)
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/thoughts')
            .then(response => response.json())
            .then(allThoughts => {
                dispatch({ type: actionTypes.allThoughts, payload: allThoughts })
                // console.log(allThoughts)
                let otherThoughts = allThoughts.filter(thought => thought.user_id !== userId)
                // console.log(otherThoughts)
                let fiveThoughts = randomizer(otherThoughts)
                // console.log(fiveThoughts)
                dispatch({ type: actionTypes.browseThoughts, payload: fiveThoughts })
            })
            .catch(console.log)
    }
}

export function postAThought(thoughtObj) {
    return function () {
        fetch('http://localhost:3000/api/v1/thoughts', {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ thought: thoughtObj })
        })
            .then(response => response.json())
            .then(console.log)
            .catch(console.log)
    }
}

export function sendALetter(letterObj) {
    return function () {
        fetch('http://localhost:3000/api/v1/letters', {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ letter: letterObj })
        })
            .then(response => response.json())
            .then(console.log)
            .catch(console.log)
    }
}
