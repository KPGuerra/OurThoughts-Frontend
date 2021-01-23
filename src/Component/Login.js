import React from 'react'
import { connect } from 'react-redux'
import { setUser } from '../Redux/actions'
import { InputText } from 'primereact/inputtext';
import { withRouter } from 'react-router'
import '../Styles/Login.scss'


class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    loginHandler = (e) => {
        e.preventDefault()
        this.props.currentUser(this.state, this.props.history)
    }

    render() {
        return (
            <div className="container">
                <br />
                <form className="form" onSubmit={this.loginHandler}>
                <h1> LOG IN </h1>
                <br/>
                    <div className="p-field p-grid">
                        <label htmlFor="username">USERNAME</label>
                        <div className="p-col">
                            <InputText  className="input" id="username" type="text" name="username" value={this.state.username} onChange={this.changeHandler} required />
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="password">PASSWORD</label>
                        <div className="p-col">
                            <InputText  className="input" id="password" type="password" name="password" value={this.state.password} onChange={this.changeHandler} required />
                        </div>
                    </div>
                    <br /> <br />
                    <button className="button"> LOG IN </button>
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

export default  withRouter(connect(null, mdp)(Login))
