import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Styles/HomePage.scss'
// import 'primeflex/primeflex.css';


class HomePage extends React.Component {

    render() {
        return (
            <div className="homepage-container">
                {this.props.currentUser ? (
                    <>
                        <h1>WELCOME</h1>
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
                        <p> A safe place to share your thoughts.</p>
                        <p> Spread kindness & receive it. </p>
                        <br/>
                        <NavLink to="/login">
                            <button className="p-shadow-24"> LOG IN </button>
                        </NavLink>
                        <NavLink to="/signup">
                            <button className="p-shadow-24"> SIGN UP </button>
                        </NavLink>
                    </>
                }
            </div>
        )
    }
}

function msp(state) {
    return ({
        currentUser: state.currentUser
    })
}
export default connect(msp)(HomePage)
