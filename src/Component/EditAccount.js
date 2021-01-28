import React from 'react'
import { connect } from 'react-redux'
import { editAccount } from '../Redux/actions'
import { withRouter } from 'react-router'
import styled from "styled-components";


class EditAccount extends React.Component {
    userObj = this.props.userObj

    state = {
        username: this.userObj.username,
        password: this.userObj.password,
        email: this.userObj.email,
        name: this.userObj.name,
        pronouns: this.userObj.pronouns,
        bio: this.userObj.bio,
        avatar: this.userObj.avatar
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    editHandler = (e) => {
        e.preventDefault()
        this.props.editAccount(this.userObj.id, this.state, this.props.history)
    }

    render() {
        return (
            <Wrapper>
                <EditForm onSubmit={this.editHandler}>
                <Title> EDIT ACCOUNT </Title>
                <br /><br />
                    {/* <label>USERNAME</label> */}
                    <div style={{ width: "20%", float: "left"}}>
                    <Input type="text" name="username" value={this.state.username} onChange={this.changeHandler} required />
                    {/* <label>PASSWORD</label> */}
                    <Input type="password" name="password" value={this.state.password} onChange={this.changeHandler} required />   
                    {/* <label>EMAIL</label> */}
                    <Input type="email" name="email" value={this.state.email} onChange={this.changeHandler} required />
                    {/* <label>NAME</label> */}
                    <Input type="text" name="name" value={this.state.name} onChange={this.changeHandler} required />
                    {/* <label>PRONOUNS</label> */}
                    <Input type="text" name="pronouns" value={this.state.pronouns} onChange={this.changeHandler} required />
                    {/* <label>AVATAR</label> */}
                    <Input type="text" name="avatar" value={this.state.avatar} onChange={this.changeHandler} required />
                    </div>

                    <div style={{ width: "75%", float: "right"}}>
                    {/* <label>BIOGRAPHY</label> */}
                    <InputBio type="text" name="bio" value={this.state.bio} onChange={this.changeHandler} required />
                    </div>
                    <br/> 
                    <br/><br/>
                    <Button> EDIT </Button>
                </EditForm>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    margin: auto;
    position: center;
    display: flex;
`

const EditForm = styled.form`
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


  ::placeholder{
      color: #ffc2e0;
  }
:hover{
    background-color: rgba(255, 255, 255, 0.4);
}

:focus{
    background-color: white;
  width: 260px;
  color: #12263A;
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
      color: #ffc2e0;
  }
:hover{
    background-color: rgba(255, 255, 255, 0.4);
}

:focus{
    background-color: white;
  color: #12263A;
}
`
const Button = styled.button`

background-color: white;
border: 0;
padding: 10px 15px;
color: black;
border-radius: 3px;
width: 250px;
text-align: center;
cursor: pointer;
font-size: 18px;
font-weight: bold;
transition-duration: 0.25s;
margin-right: 170px;
margin-top: 20px;

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
        editAccount: (userId, userObj,history) => dispatch(editAccount(userId, userObj,history))
    }
}

export default withRouter(connect(null, mdp)(EditAccount))