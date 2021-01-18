import React from 'react'
import {connect} from 'react-redux'
import { postAThought } from '../Redux/actions'

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
        if (this.state.tags[parseInt(index)] || this.state.tags[parseInt(index)] === "" ) {
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
        this.props.postAThought(this.state)
    }

    render () {
        return (
            <>
            <h1> What's on your mind? </h1>
            <form onSubmit={this.postHandler}>
                <label>TITLE</label>
                <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} required />

                <label>CONTENT</label>
                <input type="text" name="content" value={this.state.content} onChange={this.changeHandler} required />
                <br/> <br/>
                
                <label>SENTIMENT</label> 
                <br/>
                <input type="radio" id="positive"name="sentiment" value="Positive" onClick={this.state.sentiment === 'positive'} onChange={this.changeHandler}/>
                <label for="positive">Positive</label><br></br>
                <input type="radio" id="neutral "name="sentiment" value="Neutral" onClick={this.state.sentiment === 'neutral'} onChange={this.changeHandler}/>
                <label for="neutral">Neutral</label><br></br>
                <input type="radio" id="negative" name="sentiment" value="Negative" onClick={this.state.sentiment === 'negative'} onChange={this.changeHandler}/>
                <label for="negative">Negative</label><br></br>
                <br/> <br/>

                <label>How do you feel?</label>
                <input type="text" name="emotion" value={this.state.emotion} onChange={this.changeHandler} required />
                <br/> <br/>

                <label>TAGS</label>
                <input type="text" name="tags" index="0" value={this.state.tags[0]} onChange={(e, index) => {this.tagsChangeHandler(e,0)}}/>
                <input type="text" name="tags" index="1" value={this.state.tags[1]} onChange={(e, index) => {this.tagsChangeHandler(e,1)}}/>
                <input type="text" name="tags" index="2" value={this.state.tags[2]} onChange={(e, index) => {this.tagsChangeHandler(e,2)}}/>
                <br/> <br/>

                <button> POST </button>
            </form>
            </>
        )
    }
}

function mdp (dispatch) {
    return {
        postAThought: (userObj) => dispatch(postAThought(userObj))
    }
}

export default connect(null, mdp)(CreateThoughts)