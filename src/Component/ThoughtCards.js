import React from 'react'
import { NavLink } from 'react-router-dom'


class ThoughtCards extends React.Component {

    renderTags() {
        return this.props.thoughtObj.tags.map(tag => <li>{tag}</li>)
    }

    render() {
        return (
            <>
                <div>
                    <h1>{this.props.thoughtObj.title}</h1>
                    <p>{this.props.thoughtObj.content}</p>
                    <NavLink to={{ pathname: "/profile", aboutProps: { user: this.props.thoughtObj.user}}}>
                        <p> - {this.props.thoughtObj.user.username}</p>
                    </NavLink>
                </div>

                <div>
                    <h3> Sentiment: {this.props.thoughtObj.sentiment}</h3>
                </div>

                <div>
                    <h3> {this.props.thoughtObj.emotion} </h3>
                </div>

                <div>
                    <h4>Tags</h4>
                    <ul>
                        {this.renderTags()}
                    </ul>
                </div>
                <br />
            </>
        )
    }
}

export default ThoughtCards