import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Styles/HomePage.scss'
// import 'primeflex/primeflex.css';
import styled from "styled-components";


class HomePage extends React.Component {

    render() {
        return (
            <Wrapper>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                {this.props.currentUser ? (
                    <Container>
                            <Title>WELCOME</Title>
                            <br />
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
                        <br />
                        <About> A safe place to share your thoughts.</About>
                        <About> Spread kindness & receive it. </About>
                        <br /> <br />
                        <NavLink to="/login">
                            <Button className="p-shadow-24"> LOG IN </Button>
                        </NavLink>
                        <NavLink to="/signup">
                            <Button className="p-shadow-24"> SIGN UP </Button>
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

    background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #75517d, #1b2947);
  background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
  background-attachment: fixed;
  overflow: hidden;
  
`

const Container = styled.div`
margin: 0;
position: absolute;
top: 50%;
left: 50%;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
`

const Title = styled.h1`
    font-size: 70px;
    font-weight: 900;
    color: rgb(129, 163, 238);
`
const About = styled.p`
    font-size: 40px;
    font-weight: 200;
    color: rgb(203, 129, 238);
`

const Button = styled.button`
    margin-top: 10px;
    margin-right: 20px;
    font-size: medium;
    cursor: pointer;
    align-items: center;
   
    background-color: rgb(2, 6, 58);
    width: 300px;
    height: 35px;
    color: aliceblue;
    border:none;
`



function msp(state) {
    return ({
        currentUser: state.currentUser
    })
}
export default connect(msp)(HomePage)
