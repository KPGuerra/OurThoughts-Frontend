import React from 'react'
import { connect } from 'react-redux'
import { browseThoughts } from "../Redux/actions"
import ThoughtCards from '../Component/ThoughtCards'
import { NavLink } from 'react-router-dom'


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
            <div>
                {this.props.fiveThoughts.length === 0 ? <h1>LOADING ...</h1> :
                    <>
                        {this.renderThoughtCards()}
                        <button onClick={this.prevThought}>Previous</button>
                        <NavLink to={{pathname: "/write-letter", aboutProps: { thought: this.props.fiveThoughts[this.state.thoughtIndex]}}}>
                            <button>Write A Letter</button>
                        </NavLink>
                        <button onClick={this.nextThought}>Next</button>
                    </>
                }
            </div>
        )
    }
}

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