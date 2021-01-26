import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Styles/HomePage.scss'
// import 'primeflex/primeflex.css';
import styled from "styled-components";


class HomePage extends React.Component {

    TimeCheck = () => {
        let amOrPm
        var d = new Date()
        let hour = d.getHours()
        
        if (hour > 12) {
            amOrPm = "pm"
        }
        else {
            amOrPm = "am"
        }

        return amOrPm
    }

    render() {
        return (
            <Wrapper>
                {this.props.currentUser ? (
                    <Container>
                        {this.TimeCheck() === "pm" ? 
                        <>
                        <Title className="glow" >Good Afternoon {this.props.currentUser.name}!</Title> 
                        <br/>
                        <About> Self care means being patient & kind to yourself.</About>
                        {/* <About> Take time for yourself.</About> */}
                        </>
                        
                        : <Title className="glow" >Good Morning {this.props.currentUser.name}!</Title>}
                        <br/>
                            <About> Self care is about prioritizing yourself.</About>
                            {/* <About> Taking care of yourself is the best way to take care of others.</About> */}
                        <br /><br />
                        <NavLink to="/my-thought">
                            <Button>SHARE YOUR THOUGHTS</Button>
                        </NavLink>

                        <NavLink to="/explore-thoughts">
                            <Button>BROWSE OTHER THOUGHTS</Button>
                        </NavLink>

                    </Container>
                ) :

                    <Container>
                        <Title> OUR THOUGHTS </Title>
                        <br /><br />
                        <About> A safe place to share your thoughts.</About>
                        <About> Spread kindness & receive it. </About>
                        <br /> <br /><br />
                        <NavLink to="/login">
                            <Button> LOG IN </Button>
                        </NavLink>
                        <NavLink to="/signup">
                            <Button> SIGN UP </Button>
                        </NavLink>
                    </Container>
                }
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: 88.6%;
    width: 100%;
    text-align: center;
    margin: auto;
    position: center;
`

const Container = styled.div`
    text-align: center;
    margin: 0;
    position: absolute;
    width: 100%;
    top: 45%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 70px;
    color: #25ced1;
    text-align: center;
    text-shadow: 0px 0px 6px #25ced1;

`
const About = styled.p`
    font-size: 40px;
    font-weight: 200;
    color: #ffc2e0;
    margin: 20px;
    align-self: start.
`

const Button = styled.button`
    background:  #ffcb77;
    border: 0px solid;
    border-color: #EF476F;
    width: 300px;
    font-weight: bolder;
    font: inherit;
    line-height: 1;
    margin-left: 50px;
    margin-right: 50px;
    padding: 10px;
    border-radius: 3px;
    font-weight: bolder;
   
    color: var(--color);
    transition: 0.25s;
    border-color: var(--hover);
    color: black;
    --color: #ffcb77;
    --hover: #ffcb77;
    :hover,:focus {
        border-color: #ffcb77;
        -webkit-animation: pulse 1s;
          animation: pulse 1s;
        box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);
    }

    @-webkit-keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 var(--hover);
        }
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 var(--hover);
        }
    }
`



function msp(state) {
    return ({
        currentUser: state.currentUser
    })
}
export default connect(msp)(HomePage)
