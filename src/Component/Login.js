import React from 'react'
import { connect } from 'react-redux'
import { setUser } from '../Redux/actions'
import { InputText } from 'primereact/inputtext';
import { withRouter } from 'react-router'
import '../Styles/Login.scss'
import styled from "styled-components";


class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    loginHandler = (e) => {
        e.preventDefault()
        this.props.currentUser(this.state, this.props.history)
    }

    render() {
        return (
            <Wrapper>
                <LoginForm className="form" onSubmit={this.loginHandler}>
                    <Title> Welcome Back </Title>
                    <br />
                    <br /><br />
                    {/* <label htmlFor="username">USERNAME</label> */}
                    <Input className="input" placeholder="Username" type="text" name="username" value={this.state.username} onChange={this.changeHandler} required />
                    {/* <label htmlFor="password">PASSWORD</label> */}
                    <Input className="input" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.changeHandler} required />
                    <br /> <br />
                    <Button className="button"> LOG IN </Button>
                </LoginForm>
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

const LoginForm = styled.form`
    position: relative;
    width: 60rem;
    top: 20%;
    margin: auto;
    font-weight: 300;
    text-align: center;
    padding: 20px;
    background-color: transparent;
    border-radius: 5%;
    
`

const Title = styled.h1`
font-weight: 700;
font-size: 70px;
color: #F7AEF8;
text-align: center;
text-shadow: 0px 0px 6px #F7AEF8;

`
const Input = styled.input`
-webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  color: #12263A;
  text-align: center;
  font-size: 18px;
  transition-duration: 0.25s;
  font-weight: 300;
  ::placeholder{
      color: #12263A;
  }
:hover{
    background-color: rgba(255, 255, 255, 0.4);
}

:focus{
    background-color: white;
  width: 300px;
  color: black;
}
`

const Button = styled.button`

background-color: white;
border: 0;
padding: 10px 15px;
color: black;
border-radius: 3px;
width: 250px;
cursor: pointer;
font-size: 18px;
transition-duration: 0.25s;
font-weight: bold;

}

color: var(--color);
    transition: 0.25s;
    border-color: var(--hover);
    color: black;
    --color: white;
    --hover: white;
    :hover,:focus {
        border-color: white;
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

function mdp(dispatch) {
    return {
        currentUser: (userObj, history) => dispatch(setUser(userObj, history))
    }
}

export default withRouter(connect(null, mdp)(Login))
