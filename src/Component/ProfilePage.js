import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteUser } from '../Redux/actions'

class ProfilePage extends React.Component {

    deleteHandler = () => {
        this.props.deleteUser(this.props.location.aboutProps.user.id)
    }

    render() {
        console.log(this.props.location.aboutProps.user)
        let userObj = this.props.location.aboutProps.user
        return (
            <div>

                <div>
                    <img src={userObj.avatar} />
                    <h2>{userObj.username}</h2>

                    {userObj.id === this.props.currentUser.id ?
                        <>
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
                            <button>MESSAGE</button>
                        </>
                    }
                </div>

                <div>
                    <h2>NAME: {userObj.username}</h2>
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
        deleteUser: (userId) => dispatch(deleteUser(userId))
    })
}
export default connect(msp, mdp)(ProfilePage)