import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'



class Header extends React.Component {

    logoutHandler = () => {
        localStorage.clear()
        window.location.href = '/home'
    }

    render() {
        return (
            <div>
                <NavLink to="/home">
                    <h1>OUR THOUGHTS</h1>
                </NavLink>

                {this.props.currentUser ?
                    <>
                        <NavLink to={{pathname: "/profile", aboutProps: { user: this.props.currentUser}}}>
                            <h4> {this.props.currentUser.username} </h4>
                        </NavLink>
                        <NavLink to="/inbox">
                           <h4> Inbox </h4>
                        </NavLink>
                        <NavLink to="/my-thought">
                            <h4> Post A Thought </h4>
                        </NavLink>
                        <NavLink to="/explore-thoughts">
                           <h4> Explore Thoughts </h4>
                        </NavLink>
                        <NavLink to="/resources">
                            <h4> Mental Resources </h4>
                        </NavLink>
                        
                        <button onClick={this.logoutHandler}>Log Out</button>
                    </>
                    : null}

            </div>
        )
    }
}

function msp(state) {
    return ({
        currentUser: state.currentUser
    })
}
export default connect(msp)(Header)