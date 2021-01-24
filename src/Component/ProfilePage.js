import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteUser } from '../Redux/actions'
import { withRouter } from 'react-router'
import Talk from "talkjs";


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

    messageButtonHandler = () => {
        // * Retrieve the two users that will participate in the conversation * /
        const currentUser = this.props.currentUser
        const user = this.userFinder()
        var other = new Talk.User({
                id: user.id,
                name: user.name,
                email: user.email,
                photoUrl: user.avatar,
                welcomeMessage: "Hey!"
            });

        /* Session initialization code */
        Talk.ready
            .then(() => {
                /* Create the two users that will participate in the conversation */
                const me = new Talk.User(currentUser);
                // const other = new Talk.User(user)

                /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: process.env.REACT_APP_API_KEY,
                        me: me
                    });
                }

                /* Get a conversation ID or create one */
                const conversationId = Talk.oneOnOneId(me, other);
                const conversation = window.talkSession.getOrCreateConversation(conversationId);

                /* Set participants of the conversations */
                conversation.setParticipant(me);
                conversation.setParticipant(other);

                /* Create and mount chatbox in container */
                this.chatbox = window.talkSession.createChatbox(conversation);
                this.chatbox.mount(this.container);
            })
            .catch(e => console.error(e));

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
                            <br /><br />
                            <button> INBOX </button>
                            <NavLink to={{ pathname: "/edit", aboutProps: { user: userObj } }}>
                                <button> EDIT MY ACCOUNT </button>
                            </NavLink>
                            <button onClick={this.deleteHandler}> DELETE MY ACCOUNT </button>

                            <NavLink to="/past-thoughts">
                                <button> MY THOUGHTS </button>
                            </NavLink>
                        </>
                        :
                        <>
                            <br /><br />
                            <div className="user-action">
                                <button onClick={(userObj) => this.messageButtonHandler(userObj.id)}>Message</button>
                            </div>

                        </>
                    }
                </div>

                <div>
                    <br /><br />
                    <h2>NAME: {userObj.name}</h2>
                    <br />
                    <h2>PRONOUNS: {userObj.pronouns}</h2>
                    <br /><br />
                    <h2>BIO</h2>
                    <p>{userObj.bio}</p>
                </div>


                <div className="chatbox-container" ref={c => this.container = c}>
                    <div id="talkjs-container" style={{ height: "300px" }}><i></i></div>
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