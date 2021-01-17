import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class HomePage extends React.Component {

    checkForUser = () => {
        if (this.props.currentUser) {
            console.log(this.props.currentUser)
            return <h2>WELCOME</h2>
        }
        else {
            return (
                <>
                    <h1> OUR THOUGHTS </h1>
                    <p> A place to share our thoughts</p>

                    <NavLink to="/login">
                        <button> LOG IN </button>
                    </NavLink>

                    <NavLink to="/signup">
                        <button> SIGN UP </button>
                    </NavLink>
                </>
            )
        }
    }

    render() {
        return (
            <>
                {this.checkForUser()}
            </>
        )
    }
}

function msp(state) {
    return ({
        currentUser: state.currentUser
    })
}
export default connect(msp)(HomePage)
