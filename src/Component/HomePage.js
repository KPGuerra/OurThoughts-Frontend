import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../Styles/HomePage.scss'
// import 'primeflex/primeflex.css';
import styled from "styled-components";
import { Divider } from 'primereact/divider'


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
                                <Title className="glow" >Our Thoughts </Title>
                                <br />
                                <About> 🌕 Good Afternoon! Tomorrow is a new day 🌕 </About>
                                {/* <About> Take time for yourself.</About> */}
                            </>

                            : <Title className="glow" > Our Thoughts </Title>}
                        <br />
                        <About>  🌤 Good Morning! Let's have a good day! 🌤 </About>

                        {/* <About> Taking care of yourself is the best way to take care of others.</About> */}
                        <br /><br />

                        <SubContainer>
                            <div style={{ width: "45%", float: "left" }}>
                                <p style={{fontSize: "26px", textAlign: "left"}}> Need to vent? Want to celebrate a personal achievement? Share with others!</p>
                                <br/>
                                <NavLink to="/my-thought">
                                    <Button>SHARE YOUR THOUGHTS</Button>
                                </NavLink>
                            </div>
                            <div style={{ width: "10%", float: "left" }}>
                                <Divider style={{color: "white"}} layout="vertical" />
                            </div>
                            <div style={{ width: "45%", float: "left" }}>
                                <p style={{fontSize: "26px", textAlign: "left"}}> Checkout other people's thoughts. Write someone a letter and make their day! </p>
                                <br/>
                                <NavLink to="/explore-thoughts">
                                    <Button>BROWSE OTHER THOUGHTS</Button>
                                </NavLink>
                            </div>
                        </SubContainer>

                    </Container>
                ) :

                    <Container>
                        <Title> OUR THOUGHTS </Title>
                        <br /><br />
                        {/* <About> A safe place to share your thoughts.</About> */}
                        <About style={{ color: "#12263A"}}> Spread kindness & receive it. </About>
                        <br /> <br /><br />
                        <NavLink to="/login">
                            <Button style={{marginLeft: "50px", marginRight: "50px"}}> LOG IN </Button>
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
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`
const SubContainer = styled.div`
display: inline-flex;
vertical-align: top;
width: 55%;
height: auto;
margin: 0;
color: #12263A;

font-weight: 300;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 70px;
    color: #F7AEF8;
    text-align: center;
    text-shadow: 0px 0px 4px #F7AEF8;

`
const About = styled.p`
    font-size: 40px;
    font-weight: 300;
    margin: 20px;
    align-self: start;
    color: #93c9ff;

`

const Button = styled.button`
    margin-top: 20px;
    background:  white;
    border: 0px solid;
    border-color: #EF476F;
    width: 300px;
    font-weight: bolder;
    font: inherit;
    line-height: 1;
    padding: 10px;
    border-radius: 3px;
    font-weight: bolder;
   
    color: var(--color);
    transition: 0.25s;
    border-color: var(--hover);
    color: black;
    --color: white;
    --hover: white;
    :hover,:focus {
        border-color: #93c9ff;
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
