import actionTypes from './actionTypes'

// =========================== USER FUNCTION =========================================//

export function setUser(userObj, history) {
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
                history.push("/home")
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

export function editAccount(userId, updatedObj, history) {
    return function (dispatch) {
        fetch(`http://localhost:3000/api/v1/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedObj),
        })
            .then(response => response.json())
            .then(userData => {
                // console.log('Success:', userData)
                history.push("/profile")
                // dispatch({ type: actionTypes.editAccount, payload: userData})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export function deleteUser(userId, history) {
    return function (dispatch) {
        fetch(`http://localhost:3000/api/v1/users/${userId}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(thing => {
                dispatch({ type: actionTypes.deleteAccount, payload: userId })
                history.push('/home')
            })
            .catch(console.log)
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

export function postAThought(thoughtObj, history) {
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
            .then(history.push('/home'))
            .catch(console.log)
    }
}

export function getPastThoughts(userId) {
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/thoughts')
            .then(response => response.json())
            .then(allThoughts => {
                let myThoughtsArr = allThoughts.filter(thought => thought.user_id === userId)
                console.log(myThoughtsArr)
                dispatch({ type: actionTypes.myThoughts, payload: myThoughtsArr })
            })
            .catch(console.log)
    }
}

export function deleteThought(thoughtId, history) {
    return function () {
        fetch(`http://localhost:3000/api/v1/thoughts/${thoughtId}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(history.push('/profile'))
            .catch(console.log)
    }
}

// =========================== Letters FUNCTION =========================================//

export function sendALetter(letterObj, history) {
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
            .then(history.goBack())
            .catch(console.log)
    }
}

export function getLetters(thoughtId) {
    return function (dispatch) {
        fetch(`http://localhost:3000/api/v1/letters`)
            .then(response => response.json())
            .then(lettersArr => {
                let newLettersArr = lettersArr.filter(letter => letter.thought_id === thoughtId)
                // console.log(lettersArr)
                dispatch({ type: actionTypes.getLetters, payload: newLettersArr })
            })
            .catch(console.log)
    }
}

