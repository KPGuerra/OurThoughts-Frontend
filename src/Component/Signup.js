import React from 'react'
import { connect } from 'react-redux'
import { setUser } from '../Redux/actions'

class Signup extends React.Component {

    state = {
        username: "",
        password: "",
        email: "",
        name: "",
        pronouns: "",
        bio: "",
        avatar: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    signupHandler = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: this.state})
        })
        .then(response => response.json())
        .then( userData => {
            let loginState = {
                username: this.state.username,
                password: this.state.password
            }

            this.props.currentUser(loginState)
        })
        .catch(console.log)
    }

    render() {
        return (
            <>
                <h1> SIGN UP </h1>
                <form onSubmit={this.signupHandler}>
                    <label>USERNAME</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} required />
                    <br/>
                    <label>PASSWORD</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} required />
                    <br/>
                    <label>EMAIL</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} required />
                    <br/>
                    <label>NAME</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} required />
                    <br/>
                    <label>PRONOUNS</label>
                    <input type="text" name="pronouns" value={this.state.pronouns} onChange={this.changeHandler} required />
                    <br/>
                    <label>BIOGRAPHY</label>
                    <input type="text" name="bio" value={this.state.bio} onChange={this.changeHandler} required />
                    <br/> 
                    <label>AVATAR</label>
                    <input type="text" name="avatar" value={this.state.avatar} onChange={this.changeHandler} required />
                    <br/> 
                    <br/><br/>
                    <button> SIGN UP </button>
                </form>
            </>
        )
    }
}


function mdp(dispatch) {
    return {
        currentUser: (userObj) => dispatch(setUser(userObj))
    }
}

export default connect(null, mdp)(Signup)