import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import '../Styles/ThoughtCards.scss'

class ThoughtCards extends React.Component {

    renderTags() {
        return this.props.thoughtObj.tags.map(tag => <li>{tag}</li>)
    }

    render() {
        return (
            <>


                <h1>{this.props.thoughtObj.title}</h1>

                <RandomThought>{this.props.thoughtObj.content}</RandomThought>



                <br />
                <NavLink to={{ pathname: "/profile", aboutProps: { user: this.props.thoughtObj.user } }}>
                    <p> - {this.props.thoughtObj.user.username}</p>
                </NavLink>


                <div>



                    <h3> Sentiment: {this.props.thoughtObj.sentiment}</h3>
                </div>

                <div>
                    <br />
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

const RandomThought = styled.article`
text-align: center;

height: 200px;
width: 50%;
font-size: 16.5px;
line-height: 2.5em;
margin-bottom: 2.5em;
box-shadow: 0 0 .5em rgba(0, 0, 0, 0.15);
margin: 2em auto;
padding: 1em 3em;
position: relative;
outline: 0;

background: #08f;
background: linear-gradient(top, #8cb , #bde 2%);
background-size: 100% 45px;
z-index: 0;

        border-bottom-right-radius: 500px 1em;
    border-bottom-left-radius: 20px 5em;
    border-top-right-radius: .5em 2em;

    

    ::before {
        background: #cef;
        transform: rotate(4deg);
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }

    ::after {
        background: #dff;
        transform: rotate(-4deg);
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }
`


export default ThoughtCards