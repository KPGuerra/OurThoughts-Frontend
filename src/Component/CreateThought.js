// import React from 'react'
// import {connect} from 'react-redux'
// import { setUser } from '../Redux/actions'

// class Login extends React.Component {

//     state = {
//         username: "",
//         password: ""
//     }

//     changeHandler = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     loginHandler = (e) => {
//         e.preventDefault() 
//         this.props.currentUser(this.state)
//     }

//     render () {
//         return (
//             <>
//             <h1> LOG IN </h1>
//             <form onSubmit={this.loginHandler}>
//                 <label>USERNAME</label>
//                 <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} required />
//                 <br/>
//                 <label>PASSWORD</label>
//                 <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} required />
//                 <br/> <br/>
//                 <button> LOG IN </button>
//             </form>
//             </>
//         )
//     }
// }

// function mdp (dispatch) {
//     return {
//         currentUser: (userObj) => dispatch(setUser(userObj))
//     }
// }

// export default connect(null, mdp)(Login)