import React from 'react'
import {connect} from 'react-redux'
import { sendALetter } from '../Redux/actions'
import { withRouter } from 'react-router'

import ThoughtCards from '../Component/ThoughtCards'

class CreateThoughts extends React.Component {

    state = {
        user_id: localStorage.getItem("user_id"),
        thought_id: this.props.location.aboutProps.thought.id,
        content: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }


    sendLetterHandler = (e) => {
        e.preventDefault() 
        this.props.sendALetter(this.state, this.props.history)
    }

    render () {
        console.log(this.props.location.aboutProps.thought)
        const thoughtObj = this.props.location.aboutProps.thought
        return (
            <>
            <div>
                <ThoughtCards thoughtObj={thoughtObj}/>
            </div>

            <h1> Write A Thoughtful Letter </h1>
            <br/>
            <form onSubmit={this.sendLetterHandler}>
                
                <textarea type="text" name="content" value={this.state.content} onChange={this.changeHandler} required />
                <br/> <br/>
                <button> Send Letter </button>
            </form> 
            </> 
        )
    }
}

function mdp (dispatch) {
    return {
        sendALetter: (userObj, history) => dispatch(sendALetter(userObj,history))
    }
}

export default withRouter(connect(null, mdp)(CreateThoughts))