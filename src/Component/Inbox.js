import React, { Component } from 'react';
import { connect } from 'react-redux'
import Talk from 'talkjs';
import styled from "styled-components";


class Inbox extends Component {
    constructor(props) {
        super(props);
        this.inbox = undefined;
        this.talkjsContainer = React.createRef();
    }

    componentDidMount() {
        const currentUser = this.props.currentUser;
        Talk.ready.then(() => {
            var me = new Talk.User({
                id: currentUser.id,
                name: currentUser.name,
                email: currentUser.email,
                photoUrl: currentUser.avatar,
                welcomeMessage: "Hey there! How are you? :-)"
            });

            window.talkSession = new Talk.Session({
                appId: process.env.REACT_APP_API_KEY,
                me: me
            });

            // // const otherUser = this.props.otherUser
            // var other = new Talk.User({
            //     id: "654321",
            //     name: "Sebastian",
            //     email: "Sebastian@example.com",
            //     photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
            //     welcomeMessage: "Hey, how can I help?"
            // });

            // var conversation = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
            // conversation.setParticipant(me);
            // conversation.setParticipant(other);

            this.inbox = window.talkSession.createInbox();
            this.inbox.mount(this.container);
        })

    }

    render() {
        return (
            <Wrapper>
                <Title> YOUR INBOX </Title>
                <div style={{ height: '600px' }} className="inbox-container" ref={c => this.container = c}>Loading...</div>
                {/* <div ref={this.talkjsContainer} className="chatbox-container"></div> */}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: 88.6%;
    width: 100%;

    

    position: relative;
   
    top: 5%;
    margin: auto;
`

const Title = styled.h1`
font-weight: 700;
font-size: 50px;
color: #FFCB77;
text-align: center;
text-shadow: 0px 0px 6px #FFCB77;
margin-bottom: 20px;
`


function msp(state) {
    return ({
        currentUser: state.currentUser,
        otherUser: state.otherUser
    })
}
export default connect(msp)(Inbox)

