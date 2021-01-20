import React from 'react'
import { connect } from 'react-redux'
import { setUser } from '../Redux/actions'
import { InputText } from 'primereact/inputtext';
import { withRouter } from 'react-router'
import '../Styles/Login.scss'

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
            body: JSON.stringify({ user: this.state })
        })
            .then(response => response.json())
            .then(userData => {
                let loginState = {
                    username: this.state.username,
                    password: this.state.password
                }

                this.props.currentUser(loginState, this.props.history)
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="container" id="cloud-intro">
                <h1> SIGN UP </h1>
                <form onSubmit={this.signupHandler}>
                    <div className="p-field p-grid">
                        <label>USERNAME</label>
                        <div className="p-col">
                            <InputText type="text" name="username" value={this.state.username} onChange={this.changeHandler} required />
                        </div>
                    </div>

                    <div className="p-field p-grid">
                        <label>PASSWORD</label>
                        <div className="p-col">
                            <InputText type="password" name="password" value={this.state.password} onChange={this.changeHandler} required />
                        </div>
                    </div>

                    <div className="p-field p-grid">
                        <label>EMAIL</label>
                        <div className="p-col">
                            <InputText type="email" name="email" value={this.state.email} onChange={this.changeHandler} required />
                        </div>
                    </div>

                    <div className="p-field p-grid">
                        <label>NAME</label>
                        <div className="p-col">
                            <InputText type="text" name="name" value={this.state.name} onChange={this.changeHandler} required />
                        </div>
                    </div>

                    <div className="p-field p-grid">
                        <label>PRONOUNS</label>
                        <div className="p-col">
                            <InputText type="text" name="pronouns" value={this.state.pronouns} onChange={this.changeHandler} required />
                        </div>
                    </div>

                    <div className="p-field p-grid">
                        <label>BIOGRAPHY</label>
                        <div className="p-col">
                            <InputText type="text" name="bio" value={this.state.bio} onChange={this.changeHandler} required />
                        </div>
                    </div>

                    <div className="p-field p-grid">

                        <label>AVATAR</label>
                        <div className="p-col">

                            <InputText type="text" name="avatar" value={this.state.avatar} onChange={this.changeHandler} required />
                        </div>
                    </div>
                    <br /><br />
                    <button> SIGN UP </button>
                </form>
            </div>
        )
    }
}


function mdp(dispatch) {
    return {
        currentUser: (userObj, history) => dispatch(setUser(userObj, history))
    }
}

export default withRouter(connect(null, mdp)(Signup))