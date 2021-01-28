import React from 'react'
import { connect } from 'react-redux'
import { getLetters } from '../Redux/actions'
import { deleteThought } from '../Redux/actions'
import { withRouter } from 'react-router'

import LetterCards from '../Component/LetterCards'
import ThoughtCards from '../Component/ThoughtCards'
import styled from "styled-components";


class ThoughtPage extends React.Component {

    state = {
        thoughtIndex: 0
    }

    componentDidMount() {
        this.props.getLetters(this.props.location.aboutProps.thought.id)
    }

    nextThought = () => {
        if (this.state.thoughtIndex === this.props.lettersArray.length - 1) {
            return
        }
        else {
            this.setState(prevState => ({ thoughtIndex: parseInt(prevState.thoughtIndex + 1) }))
        }
    }

    prevThought = () => {
        if (this.state.thoughtIndex === 0) {
            return
        }
        else {
            this.setState(prevState => ({ thoughtIndex: parseInt(prevState.thoughtIndex - 1) }))
        }
    }

    renderLetterCards() {

        return <LetterCards letterObj={this.props.lettersArray[this.state.thoughtIndex]} />

    }

    renderThoughtCard() {
        return <ThoughtCards thoughtObj={this.props.location.aboutProps.thought} />
    }

    deleteHandler = () => {
        this.props.deleteThought(this.props.location.aboutProps.thought.id, this.props.history)
    }

    render() {
        return (
            <Wrapper>
                <div style={{ width: "50%", float: "left" }}>
                    <div style={{marginTop: "45px"}}></div>
                    {this.renderThoughtCard()}
                    <Button onClick={this.deleteHandler}>DELETE</Button>
                </div>
                <br/>
                <br/>
                <div style={{ width: "50%", float: "left" }}>
                    {this.props.lettersArray.length === 0 ? <h1>LOADING ...</h1> :
                        <>
                            <Title>YOUR LETTERS</Title>

                            {this.renderLetterCards()}
                            
                            <Button onClick={this.prevThought}>Previous</Button>
                            <Button onClick={this.nextThought}>Next</Button>
                        </>
                    }
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
`
const Title = styled.h1`
    font-size: 40px;
    width: 100%;
    font-weight: 600;
    color: #F7AEF8;
text-shadow: 0px 0px 2px #F7AEF8;
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

function msp(state) {
    return ({
        lettersArray: state.lettersArray,
    })
}

function mdp(dispatch) {
    return {
        getLetters: (thoughtId) => dispatch(getLetters(thoughtId)),
        deleteThought: (thoughtId,history) => dispatch(deleteThought(thoughtId,history))
    }
}

export default withRouter(connect(msp, mdp)(ThoughtPage))