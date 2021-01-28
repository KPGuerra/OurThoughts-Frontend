import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";



class LetterCards extends React.Component {

    render() {
        return (
            <Wrapper>
                <div>
                    <RandomThought>{this.props.letterObj.content}
                    <NavLink to={{ pathname: "/profile", aboutProps: { user: this.props.letterObj.user}}}>
                        <ByTag> - {this.props.letterObj.user.username}</ByTag>
                    </NavLink>
                    </RandomThought>
                </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: auto;
    width: auto;
    text-align: center;
    margin-top: 25px;
    
    margin-bottom: 100px;
    position: relative;
    top: 10%;
`

const RandomThought = styled.article`
text-align: left;
border-radius: 5px;
position: relative;
width: 95%;
height: 300px;

margin: auto;
margin-bottom: 40px;

font-size: 16.5px;
line-height: 2.5em;

    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.15);
    
    padding: 1em 3em;
    position: relative;
    outline: 0;

    background: #08f;
    background: -webkit-linear-gradient(top, #8cb, #bde 2%);
    background-size: 100% 45px;
`
const ByTag = styled.p`
text-align:right;
font-size: 20px;
    width: 100%;
    font-weight: 600;
    color: #011627;
text-shadow: 0px 0px 1px #011627;
`

export default LetterCards