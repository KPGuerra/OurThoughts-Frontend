import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getPastThoughts } from '../Redux/actions'

class PastThoughts extends React.Component {

    componentDidMount() {
        this.props.getPastThoughts(this.props.currentUser.id)
    }

    renderListOfThoughts() {
        return this.props.myThoughts.map(function (thought) {
            return (
                <li>
                    <h4>{thought.date}</h4>
                    <NavLink to={{pathname: "/thought", aboutProps: {thought: thought}}}>
                        <h5>{thought.title}</h5>
                    </NavLink>
                    <h5>{thought.letters.length}</h5>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h1> MY THOUGHTS</h1>
                <div>
                    {this.props.myThoughts.length === 0 ? <h1>LOADING...</h1> :
                        <ul>
                            {this.renderListOfThoughts()}
                        </ul>
                    }
                </div>

            </div>
        )
    }
}

function msp(state) {
    return ({
        currentUser: state.currentUser,
        myThoughts: state.myThoughts
    })
}
function mdp(dispatch) {
    return {
        getPastThoughts: (userId) => dispatch(getPastThoughts(userId))
    }
}

export default connect(msp, mdp)(PastThoughts)