import React from 'react'
import { connect } from 'react-redux'
import { getLetters } from '../Redux/actions'
import { deleteThought } from '../Redux/actions'

import LetterCards from '../Component/LetterCards'
import ThoughtCards from '../Component/ThoughtCards'


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
        this.props.deleteThought(this.props.location.aboutProps.thought.id)
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderThoughtCard()}
                    <button onClick={this.deleteHandler}>DELETE</button>
                </div>
                <br/>
                <br/>
                <div>
                    {this.props.lettersArray.length === 0 ? <h1>LOADING ...</h1> :
                        <>
                            {this.renderLetterCards()}
                            <button onClick={this.prevThought}>Previous</button>
                            <button onClick={this.nextThought}>Next</button>
                        </>
                    }
                </div>
            </div>
        )
    }
}

function msp(state) {
    return ({
        lettersArray: state.lettersArray,
    })
}

function mdp(dispatch) {
    return {
        getLetters: (thoughtId) => dispatch(getLetters(thoughtId)),
        deleteThought: (thoughtId) => dispatch(deleteThought(thoughtId))
    }
}

export default connect(msp, mdp)(ThoughtPage)