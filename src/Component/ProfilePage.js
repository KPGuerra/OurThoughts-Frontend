import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class ProfilePage extends React.Component {


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
                            <button> EDIT MY ACCOUNT</button>
                            
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
export default connect(msp)(ProfilePage)