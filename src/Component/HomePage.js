import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class HomePage extends React.Component {

    render() {
        return (
            <>
                {this.props.currentUser ? (
                    <>
                        <h2>WELCOME</h2>
                        <br />
                        <NavLink to="/my-thought">
                            <button>SHARE YOUR THOUGHTS</button>
                        </NavLink>

                        <NavLink to="/explore-thoughts">
                            <button>BROWSE OTHER THOUGHTS</button>
                        </NavLink>

                    </>
                ) :

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
                }
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
