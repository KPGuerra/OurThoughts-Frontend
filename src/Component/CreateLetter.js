import React from 'react'
import {connect} from 'react-redux'
import { sendALetter } from '../Redux/actions'
import { withRouter } from 'react-router'
import styled from "styled-components";
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
            <Wrapper>
            <div style={{ width: "35%", float: "left"}}>
                <ThoughtCards thoughtObj={thoughtObj}/>
            </div>

            <div style={{ width: "65%", float: "left"}}>
            <form onSubmit={this.sendLetterHandler}>
            <Title> Write A Thoughtful Letter </Title>
                
                <LetterText type="text" name="content" value={this.state.content} onChange={this.changeHandler} required />
                <br/> <br/>
                <Button> Send Letter </Button>
            </form> 
            </div>
            </Wrapper> 
        )
    }
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    margin: auto;
    position: relative;
    top: 10%
`

const Title = styled.h1`
    font-size: 40px;
    width: 100%;
    font-weight: 600;
    color: #F7AEF8;
text-shadow: 0px 0px 2px #F7AEF8;
margin-bottom: 0.5em;
`

const LetterText = styled.textarea`
resize:none;

text-align: left;
overflow: hidden;
height: 490px;
width: 90%;
font-size: 16.5px;
line-height: 2.5em;

    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.15);
    
    padding: 1em 3em;
    position: relative;
    outline: 0;

    background: #08f;
    background: -webkit-linear-gradient(top, #8cb, #bde 2%);
    background-size: 100% 45px;
    }
    :before,:after {
        border-bottom-right-radius: 500px 1em;
        border-bottom-left-radius: 20px 5em;
        border-top-right-radius: 0.5em 2em;
    }

    :focus {
        border-radius: 0;
        color: #000;
        outline: 0;
    }

    :focus::before,
    :focus::after {
        content: none;
    }

    :before,:after {
        content: " ";
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }

    :before {
        background: #cef;
        transform: rotate(4deg);
    }

    :after {
        background: #dff;
        transform: rotate(-4deg);
    }
`

const Button = styled.button`
position: relative;

background-color: white;
border: 0;
padding: 10px 15px;
color: #ffcb77;
border-radius: 3px;
width: 200px;
cursor: pointer;
font-size: 20px;
font-weight: bold;
transition-duration: 0.25s;
margin-left: 16px;
margin-right: 16px;
}

color: var(--color);
    transition: 0.25s;
    border-color: var(--hover);
    color: black;
    --color: white;
    --hover: white;
    :hover,:focus {
        border-color: white;
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

function mdp (dispatch) {
    return {
        sendALetter: (userObj, history) => dispatch(sendALetter(userObj,history))
    }
}

export default withRouter(connect(null, mdp)(CreateThoughts))