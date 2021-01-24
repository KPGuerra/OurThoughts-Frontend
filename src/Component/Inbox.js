import React, { Component } from 'react';
import { connect } from 'react-redux'
import Talk from 'talkjs';


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
            <>
                <div style={{ height: '500px' }} className="inbox-container" ref={c => this.container = c}>Loading...</div>
                {/* <div ref={this.talkjsContainer} className="chatbox-container"></div> */}
            </>
        )
    }
}



function msp(state) {
    return ({
        currentUser: state.currentUser,
        otherUser: state.otherUser
    })
}
export default connect(msp)(Inbox)

