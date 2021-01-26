import React from 'react'
import { connect } from 'react-redux'
import { postAThought } from '../Redux/actions'
import { withRouter } from 'react-router'
import styled from "styled-components";

class CreateThoughts extends React.Component {

    state = {
        user_id: localStorage.getItem("user_id"),
        date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
        title: "",
        content: "",
        sentiment: "",
        emotion: "",
        tags: [],
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    tagsChangeHandler = (e, index) => {
        if (this.state.tags[parseInt(index)] || this.state.tags[parseInt(index)] === "") {
            let newTagArray = [...this.state.tags]
            newTagArray[index] = e.target.value
            this.setState({ tags: newTagArray })
        }
        else {
            let newTagArray = [...this.state.tags]
            newTagArray.push(e.target.value)
            this.setState({ tags: newTagArray })

        }
    }


    postHandler = (e) => {
        e.preventDefault()
        this.props.postAThought(this.state, this.props.history)
    }

    render() {
        return (
            <Wrapper>
                <ThoughtForm onSubmit={this.postHandler}>
                    <Title> What's on your mind? </Title>
                    <br /><br />
                    {/* <label>TITLE</label> */}
                    <div style={{ width: "70%", float: "left" }}>
                        <Input style={{ width: "90%", textAlign: "center", fontWeight: "bold" }} type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler} required />

                        {/* <label>CONTENT</label> */}

                        <ThoughtText type="text" name="content" value={this.state.content} onChange={this.changeHandler} required />
                        <br /> <br />
                    </div>

                    <div style={{ width: "30%", float: "left" }}>
                        <Container>
                            <ControlGroup>
                                <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "#25CED1" }} >CATEGORY</h1>
                                <br />
                                <Radio>
                                    <input type="radio" id="positive" name="sentiment" value="Positive" onClick={this.state.sentiment === 'positive'} onChange={this.changeHandler} />
                                    <label style={{ color: "#FFCB77" }} for="positive"> Positive</label><br></br>
                                </Radio>
                                <Radio>
                                    <input type="radio" id="neutral" name="sentiment" value="Neutral" onClick={this.state.sentiment === 'neutral'} onChange={this.changeHandler} />
                                    <label style={{ color: "#FFCB77" }} for="neutral"> Neutral</label><br></br>
                                </Radio>
                                <Radio>
                                    <input type="radio" id="negative" name="sentiment" value="Negative" onClick={this.state.sentiment === 'negative'} onChange={this.changeHandler} />
                                    <label style={{ color: "#FFCB77" }} for="negative"> Negative</label><br></br>
                                </Radio>
                            </ControlGroup>
                        </Container>
                        <br /> <br />

                        {/* <label>How do you feel?</label> */}
                        <Input type="text" name="emotion" placeholder="How do you feel?" value={this.state.emotion} onChange={this.changeHandler} required />
                        <br />

                        <label style={{ fontSize: "25px", fontWeight: "bold", color: "Pink" }}>ADD TAGS</label>
                        <br /><br />
                        <Input type="text" name="tags" placeholder="Tag 1" index="0" value={this.state.tags[0]} onChange={(e, index) => { this.tagsChangeHandler(e, 0) }} />
                        <Input type="text" name="tags" placeholder="Tag 2" index="1" value={this.state.tags[1]} onChange={(e, index) => { this.tagsChangeHandler(e, 1) }} />
                        <Input type="text" name="tags" placeholder="Tag 3" index="2" value={this.state.tags[2]} onChange={(e, index) => { this.tagsChangeHandler(e, 2) }} />
                        <br /> <br />
                    </div>
                    <Button> POST </Button>
                </ThoughtForm>
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

const ThoughtForm = styled.form`
    position: relative;
    width: 100%;
    top: 2%;
    margin: auto;
    font-weight: 300;
    text-align: center;
    padding: 20px;
    background-color: transparent;
    border-radius: 5%;
    
`

const Title = styled.h1`
    font-size: 60px;
    width: 70%;
    font-weight: 600;
    color: #ffc2e0;
text-shadow: 0px 0px 6px #ffc2e0;
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
  text-align: center;
  font-size: 18px;
  transition-duration: 0.25s;
  font-weight: bold;
  color: #011627;
  ::placeholder{
      color: #011627;
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
const ThoughtText = styled.textarea`
resize:none;

text-align: left;
overflow: hidden;
height: 500px;
width: 90%;
font-size: 16.5px;
line-height: 2.5em;
margin-bottom: 2.5em;
    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.15);
    
    padding: 1em 3em;
    position: relative;
    outline: 0;

    background: #08f;
    background: -webkit-linear-gradient(top, #8cb, #bde 2%);
    background-size: 100% 45px;
    }
    :before,:after {
        border-bottom-right-radius: 500px 1em;
        border-bottom-left-radius: 20px 5em;
        border-top-right-radius: 0.5em 2em;
    }

    :focus {
        border-radius: 0;
        color: #000;
        outline: 0;
    }

    :focus::before,
    :focus::after {
        content: none;
    }

    :before,:after {
        content: " ";
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }

    :before {
        background: #cef;
        transform: rotate(4deg);
    }

    :after {
        background: #dff;
        transform: rotate(-4deg);
    }
`

const Container = styled.div`
    width 100%;
    height 100%;
    display flex;
    flex-wrap wrap;
    justify-content center;
    align-items: center;
`
const ControlGroup = styled.div`
display: inline-block;
vertical-align: top;
background-color: rgba(0, 0, 0, 0.61);
text-align: left;
box-shadow: 0 1px 2px rgba(0,0,0,0.1);
padding: 30px;
width: 250px;
height: 160px;

border-radius: 3px;
color: white;
`
const Radio = styled.div`
display: block;
position: relative;

cursor: pointer;
font-size: 18px;
border-radius: 50%;
`

const Button = styled.button`

background-color: black;
border: 0;
padding: 10px 15px;
color: #ffcb77;
border-radius: 3px;
width: 250px;
cursor: pointer;
font-size: 20px;
font-weight: bold;
transition-duration: 0.25s;
}

color: var(--color);
    transition: 0.25s;
    border-color: var(--hover);
    color: #ffcb77;
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

function mdp(dispatch) {
    return {
        postAThought: (userObj, history) => dispatch(postAThought(userObj, history))
    }
}

export default withRouter(connect(null, mdp)(CreateThoughts))