import React from 'react'
import { connect } from 'react-redux'
import { browseThoughts } from "../Redux/actions"
import ThoughtCards from '../Component/ThoughtCards'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import '../Styles/ThoughtCards.scss'


class ExploreThoughts extends React.Component {

    state = {
        thoughtIndex: 0
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.browseThoughts(this.props.currentUser.id)
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            // console.log(this.props.currentUser.id)
            this.props.browseThoughts(this.props.currentUser.id)
        }
    }

    nextThought = () => {
        if (this.state.thoughtIndex === 4) {
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

    renderThoughtCards() {

        return <ThoughtCards thoughtObj={this.props.fiveThoughts[this.state.thoughtIndex]} />
        // return this.props.fiveThoughts.map(thought => <ThoughtCards thoughtObj={thought}/>)
        // console.log(this.props.fiveThoughts[this.state.thoughtIndex])
        // console.log(this.props.fiveThoughts)
        // console.log(parseInt(this.state.thoughtIndex))

    }

    render() {
        return (
            <Wrapper>
                {this.props.fiveThoughts.length === 0 ? <h1>LOADING ...</h1> :
                    <>
                        
                        {this.renderThoughtCards()}
                        <Button onClick={this.prevThought}>Previous</Button>
                        <NavLink to={{pathname: "/write-letter", aboutProps: { thought: this.props.fiveThoughts[this.state.thoughtIndex]}}}>
                            <Button>Write A Letter</Button>
                        </NavLink>
                        <Button onClick={this.nextThought}>Next</Button>
                    </>
                }
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: 100;
    width: 50%;
    text-align: center;
    margin: auto;
    position: relative;
    top: 5%;
`
const Button = styled.button`
position: relative;
top: 1%;
background-color: #A2D2FF;
border: 0;
padding: 10px 15px;
color: whitesmoke;
border-radius: 3px;
width: 200px;
cursor: pointer;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
    --color: whitesmoke;
    --hover: whitesmoke;
    :hover,:focus {
        border-color: whitesmoke;
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
        currentUser: state.currentUser,
        fiveThoughts: state.fiveThoughts
    })
}

function mdp(dispatch) {
    return {
        browseThoughts: (userId) => dispatch(browseThoughts(userId))
    }
}

export default connect(msp, mdp)(ExploreThoughts)