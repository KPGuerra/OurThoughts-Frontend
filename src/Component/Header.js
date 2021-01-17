import React from 'react'
import {connect} from 'react-redux'


class Header extends React.Component {

    render () {
        return (
            "Hello World"
        )
    }
}

function msp (state) {
    return ({
        currentUser: state.currentUser
    })
}
export default Header