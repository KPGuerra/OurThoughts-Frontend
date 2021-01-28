import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Divider } from 'primereact/divider'
import '../Styles/ThoughtCards.scss'

class ThoughtCards extends React.Component {

    renderTags() {
        return this.props.thoughtObj.tags.map(tag => <li style={{ textAlign: "left",listStyle: "inside", color: "whitesmoke", fontSize: "20px" }}>{tag}</li>)
    }

    render() {
        return (
            <Wrapper>

                
                <Title>{this.props.thoughtObj.title}</Title>
                <br />
                <RandomThought>{this.props.thoughtObj.content}



                    <br />
                    <NavLink to={{ pathname: "/profile", aboutProps: { user: this.props.thoughtObj.user } }}>
                        <ByTag> - {this.props.thoughtObj.user.username}</ByTag>
                    </NavLink>
                </RandomThought>


                    <Sub>More Information</Sub>
                <Container>
                    <div style={{ width: "45%", float: "left", textAlign: "left", marginTop: "1px", marginLeft: "10px", height: "105px"}}>

                        <Heading>  Sentiment: {this.props.thoughtObj.sentiment}</Heading>
                        <br />
                        <Heading> Emotion: {this.props.thoughtObj.emotion} </Heading>
                    </div>
                    <div style={{ width: "10%", float: "left" }}>
                        <Divider style={{ color: "transparent" }}layout='vertical' />
                    </div>
                    <div style={{ width: "45%", float: "left" }}>
                        <Heading style={{textAlign: "center", marginBottom: "2px"}}>Added Tags</Heading>
                        <ul>
                            {this.renderTags()}
                        </ul>
                    </div>
                </Container>
                <br />
                
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: auto;
    width: auto;
    text-align: center;
    margin: auto;
    
    margin-bottom: 100px;
    position: relative;
    top: 1%;
`

const Title = styled.h1`
    font-size: 40px;
    width: 100%;
    font-weight: 600;
    color: #F7AEF8;
text-shadow: 0px 0px 2px #FFC2E0;
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
const Container = styled.div`
display: inline-flex;
vertical-align: top;

box-shadow: 0 1px 2px rgba(0,0,0,0.1);

background-color: rgba(0, 0, 0, 0.61);
width: 95%;
height: auto;
margin: 0;
border-radius: 3px;
color: #6EFAFB;
`
const Heading = styled.h2`
margin-top: 10px;
color: #FFAFCC;
font-weight: bolder;
font-size: 20px;
text-shadow: 0px 0px 1px #6EFAFB;
`
const Sub = styled.h2`
color: #25CED1;
text-shadow: 0px 0px 2px #25CED1
font-weight: bolder;
font-size: 25px;
box-shadow: 0 1px 2px rgba(0,0,0,0.1);

background-color: rgba(0, 0, 0, 0.61);
position: relative;
width: 95%;

margin: auto;
padding-bottom: 10px; 
border-bottom: dotted;
`

export default ThoughtCards