import React from 'react'
import { connect } from 'react-redux'
import { editAccount } from '../Redux/actions'

class EditAccount extends React.Component {
    userObj = this.props.userObj

    state = {
        username: this.userObj.username,
        password: this.userObj.password,
        email: this.userObj.email,
        name: this.userObj.name,
        pronouns: this.userObj.pronouns,
        bio: this.userObj.bio,
        avatar: this.userObj.avatar
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    editHandler = (e) => {
        e.preventDefault()
        this.props.editAccount(this.userObj.id, this.state)
    }

    render() {
        return (
            <>
                <h1> EDIT ACCOUNT </h1>
                <form onSubmit={this.editHandler}>
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
                    <button> EDIT </button>
                </form>
            </>
        )
    }
}


function mdp(dispatch) {
    return {
        editAccount: (userId, userObj) => dispatch(editAccount(userId, userObj))
    }
}

export default connect(null, mdp)(EditAccount)