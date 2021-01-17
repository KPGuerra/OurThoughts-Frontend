import React from 'react'
import { connect } from 'react-redux'
import { browseThoughts } from "../Redux/actions"
import ThoughtCards from '../Component/ThoughtCards'


class ExploreThoughts extends React.Component {

    componentDidMount() {
        if (this.props.currentUser) {
            this.props.browseThoughts(this.props.currentUser.id)
        }
    }

    componentDidUpdate (prevProps) {
        if (prevProps.currentUser !== this.props.currentUser) {
            this.props.browseThoughts(this.props.currentUser.id)
        }
    }

    renderThoughtCards () {
        
    return this.props.fiveThoughts.map(thought => <ThoughtCards thoughtObj={thought}/>)
    
    }

    render() {
        return (
            <div>
                {this.props.fiveThoughts.length === 0 ? <h1>LOADING ...</h1> : this.renderThoughtCards() }
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
        browseThoughts: () => dispatch(browseThoughts())
    }
}

export default connect(msp,mdp)(ExploreThoughts)