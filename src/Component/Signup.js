import React from 'react'
import { connect } from 'react-redux'
import { setUser } from '../Redux/actions'
import { InputText } from 'primereact/inputtext';
import { withRouter } from 'react-router'
import '../Styles/Login.scss'
import styled from "styled-components";

class Signup extends React.Component {

    state = {
        username: "",
        password: "",
        email: "",
        name: "",
        pronouns: "",
        bio: "",
        avatar: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    signupHandler = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: this.state })
        })
            .then(response => response.json())
            .then(userData => {
                let loginState = {
                    username: this.state.username,
                    password: this.state.password
                }

                this.props.currentUser(loginState, this.props.history)
            })
            .catch(console.log)
    }

    render() {
        return (
            <Wrapper>
                <SignupForm onSubmit={this.signupHandler}>
                    <Title> Create Your Account! </Title>
                    <br /><br />
                    
                    <div style={{ width: "20%", float: "left"}}>
                        {/* <label>USERNAME</label> */}
                        <Input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} required />

                        {/* <label>PASSWORD</label> */}
                        <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
                    {/* </div> */}
                    {/* <div style={{ width: "33.3%", float: "left" }}> */}
                        {/* <label>EMAIL</label> */}
                        <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} required />

                        {/* <label>NAME</label> */}
                        <Input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler} required />

                        {/* <label>PRONOUNS</label> */}
                        <Input type="text" name="pronouns" placeholder="Pronouns" value={this.state.pronouns} onChange={this.changeHandler} required />
                        {/* <label>AVATAR</label> */}
                        <Input type="text" name="avatar" placeholder="Avatar" value={this.state.avatar} onChange={this.changeHandler} required />
                    </div>
                    <div style={{ width: "75%", float: "right"}}>

                        {/* <label>BIOGRAPHY</label> */}
                        <InputBio type="text" name="bio" placeholder="Bio" value={this.state.bio} onChange={this.changeHandler} required />
                    </div>
                
                    <div style={{ textAlign: "center" }}>
                        <Button> SIGN UP </Button>

                    </div>
                </SignupForm>
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
    display: flex;
`

const SignupForm = styled.form`
    position: relative;
    width: 60rem;
    height: 90%;
    top: 5%;
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
text-shadow: 0px 0px 6px #F7AEF8;
font-family: Open Sans;

`
const Input = styled.input`
-webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  color: #12263A;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  transition-duration: 0.25s;
  font-weight: 300;
  font-family: Noto Sans JP;


  ::placeholder{
      color: #12263A;
  }
:hover{
    background-color: rgba(255, 255, 255, 0.4);
}

:focus{
    background-color: white;
  width: 260px;
  color: black;
}
`

const InputBio = styled.textarea`
-webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 600px;
  height: 309px;
  border-radius: 3px;
  padding: 0;
  margin: 0 auto 10px auto;
  display: block;
  text-align: left;
  font-size: 18px;
  transition-duration: 0.25s;
  font-weight: 300;

  color: #12263A;
  ::placeholder{
      color: #12263A;
  }
:hover{
    background-color: rgba(255, 255, 255, 0.4);
}

:focus{
    background-color: white;
  color: black;
}
`

const Button = styled.button`
    margin-top: 20px;
    background:  white;
    border: 0px solid;
    border-color: #EF476F;
    width: 250px;
    
    font-family: Noto Sans JP;
    font-size: 18px;
    line-height: 1;
    padding: 10px;
    border-radius: 3px;
    font-weight: bolder;
    margin: 10px;
   
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

function mdp(dispatch) {
    return {
        currentUser: (userObj, history) => dispatch(setUser(userObj, history))
    }
}

export default withRouter(connect(null, mdp)(Signup))