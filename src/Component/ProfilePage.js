import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteUser } from '../Redux/actions'
import { withRouter } from 'react-router'


class ProfilePage extends React.Component {

    deleteHandler = () => {
        this.props.deleteUser(this.props.currentUser.id, this.props.history)
    }

    userFinder = () => {
        if (this.props.location.aboutProps) {
            return this.props.location.aboutProps.user     
        }
        else {
          return this.props.currentUser
            
        }
    }

    render() {
        let userObj = this.userFinder()
        return (
            <div>
                <div>
                    <img src={userObj.avatar} />
                    <h2>{userObj.username}</h2>

                    {userObj.id === this.props.currentUser.id ?
                        <>
                        <br/><br/>
                            <button> INBOX </button>
                        <NavLink to={{pathname: "/edit", aboutProps: { user: userObj}}}>
                                <button> EDIT MY ACCOUNT </button>
                            </NavLink>
                            <button onClick={this.deleteHandler}> DELETE MY ACCOUNT </button>

                            <NavLink to="/past-thoughts">
                                <button> MY THOUGHTS </button>
                            </NavLink>
                        </>
                        :
                        <>
                        <br/><br/>
                            <button>MESSAGE</button>
                        </>
                    }
                </div>

                <div>
                <br/><br/>
                    <h2>NAME: {userObj.username}</h2>
                    <br/>
                    <h2>PRONOUNS: {userObj.pronouns}</h2>
                    <br /><br />
                    <h2>BIO</h2>
                    <p>{userObj.bio}</p>
                </div>

            </div>
        )
    }
}

function msp(state) {
    return ({
        currentUser: state.currentUser
    })
}

function mdp(dispatch) {
    return ({
        deleteUser: (userId, history) => dispatch(deleteUser(userId, history))
    })
}
export default withRouter(connect(msp, mdp)(ProfilePage))