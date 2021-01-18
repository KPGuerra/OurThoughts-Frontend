import React from 'react'
import { NavLink } from 'react-router-dom'


class LetterCards extends React.Component {

    render() {
        return (
            <>
                <div>
                    <p>{this.props.letterObj.content}</p>
                    <NavLink to={{ pathname: "/profile", aboutProps: { user: this.props.letterObj.user}}}>
                        <p> - {this.props.letterObj.user.username}</p>
                    </NavLink>
                </div>

                <div>
                    <button> LIKE </button>
                </div>

                <br />
            </>
        )
    }
}

export default LetterCards