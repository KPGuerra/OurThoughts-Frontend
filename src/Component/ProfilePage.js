import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteUser } from '../Redux/actions'
import { withRouter } from 'react-router'
import Talk from "talkjs";
import styled from "styled-components";
import '../Styles/ProfilePage.scss'



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
            role: "Userx",
            email: user.email,
            photoUrl: user.avatar,
            welcomeMessage: "Hey!"
        });

        /* Session initialization code */
        Talk.ready
            .then(() => {
                /* Create the two users that will participate in the conversation */
                const me = new Talk.User({
                    id: currentUser.id,
                    name: currentUser.name,
                    role: "Userx",
                    email: currentUser.email,
                    photoUrl: currentUser.avatar,
                });
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
                const popup = window.talkSession.createPopup(conversation, { keepOpen: false });
                popup.mount({ show: true });
            })
            .catch(e => console.error(e));

    }

    render() {
        let userObj = this.userFinder()
        return (
            <Wrapper>
                <Container>
                    <div style={{ width: "30%", float: "left", borderRight: "dotted", borderRightColor: "whitesmoke" }}>
                        <Avatar src={userObj.avatar} />
                        <UserName>{userObj.username}</UserName>

                        {userObj.id === this.props.currentUser.id ?
                            <>
                                <br /><br />

                                <NavLink to="/past-thoughts">
                                    <Button> MY THOUGHTS </Button>
                                </NavLink>
                                <NavLink to="/inbox">
                                    <Button> INBOX </Button>

                                </NavLink>
                                <NavLink to={{ pathname: "/edit", aboutProps: { user: userObj } }}>
                                    <Button> EDIT MY ACCOUNT </Button>
                                </NavLink>
                                <Button onClick={this.deleteHandler}> DELETE MY ACCOUNT </Button>
                            </>
                            :
                            <>
                                <br /><br />
                                <div className="user-action">
                                    <Button onClick={(userObj) => this.messageButtonHandler(userObj.id)}>Message</Button>
                                </div>

                            </>
                        }
                    </div>

                    <div style={{ width: "70%", float: "left" }}>
                        <div className="parent">
                            <MainHeader className="div1"> PERSONAL INFORMATION </MainHeader>
                            
                            <Header className="div2"> FULL NAME </Header>
                            <TextInfo className="div4">{userObj.name}</TextInfo>

                            <br />
                            <Header className="div3"> PRONOUNS </Header>
                            <TextInfo className="div5">{userObj.pronouns}</TextInfo>
                            <br /><br />
                            <Header className="div6"> BIOGRAPHY </Header>
                            <BioInfo className="div7">{userObj.bio}</BioInfo>

                        </div>
                    </div>

                </Container>
                <div className="chatbox-container" ref={c => this.container = c}>
                    <div id="talkjs-container" style={{ height: "500px" }}><i></i></div>
                </div>
            </Wrapper>


        )
    }
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
    position: center;
`
const Container = styled.div`
text-align: center;
    position: relative;
    display: inline-flex;
    top: 10%;
    left: 3%;
    width: 94%;
    height 75%;
    background-color: rgba(0, 0, 0, 0.664);
    justify-content center;
    align-items: center;
    margin: 0;
`
const Avatar = styled.img`
width: 250px;
height: 250px;
margin: 0;
border-radius: 50%;
`
const UserName = styled.h1`
    font-size: 45px;
    width: 100%;
    font-weight: 600;
    color: #F7AEF8;
text-shadow: 0px 0px 2px #F7AEF8;
font-family: Open Sans;
`
const Button = styled.button`
    background:  whitesmoke;
    border: 0px solid;
    border-color: #EF476F;
    width: 250px;
    
    line-height: 1;
    margin-bottom: 10px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 10px;
    border-radius: 3px;
    font-size: 15px;
    font-weight: bold;
    font-family: Open Sans;
    transition-duration: 0.25s;
}

color: var(--color);
    transition: 0.25s;
    border-color: var(--hover);
    color: #12263A;
    --color: #12263A;
    --hover: white;
    :hover,:focus {
        border-color: #12263A;
        -webkit-animation: pulse 1s;
          animation: pulse 1s;
        box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
    }

    @-webkit-keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 var(--hover);
        }
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 var(--hover);
        }
    }
`
const MainHeader = styled.h1`
font-size: 43px;
width: 100%;
font-weight: 600;
color: #F7AEF8;
text-shadow: 0px 0px 2px #F7AEF8;
margin-bottom: 50px;
font-family: Open Sans;
`
const Header = styled.h2`

font-size: 40px;
width: 100%;
font-weight: 600;
color: #6EFAFB;
text-shadow: 0px 0px 2px #6EFAFB;
margin-top: 0px;
font-family: Open Sans;
`
const TextInfo = styled.h2`

font-size: 30px;
width: 100%;
font-weight: 300;
color: #FFFF;
font-family: Noto Sans JP;
`
const BioInfo = styled.p`
text-align: left;
font-family: Noto Sans JP;
font-size: 23px;
width: 90%;
font-weight: 300;
color: #FFFF;
margin: 0px 43px 50px 44px;
`

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