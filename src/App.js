import React from 'react'
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { refreshUser } from './Redux/actions'

import Header from './Component/Header'
import HomePage from './Component/HomePage';
import Login from './Component/Login'
import Signup from './Component/Signup'
import Inbox from './Component/Inbox'

import ExploreThoughts from './Containers/ExploreThoughts'
import CreateThought from './Component/CreateThought';
import CreateLetter from './Component/CreateLetter';
import ProfilePage from './Component/ProfilePage';
import PastThoughts from './Component/PastThoughts'
import ThoughtPage from './Containers/ThoughtPage'
import EditAccount from './Component/EditAccount'
import Footer from './Component/Footer';

// console.log(process.env.REACT_APP_API_KEY)

class App extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem("token")
    // console.log("TOKEN", token)
    if (token) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => response.json())
        .then(data => {
          // console.log("PROFILE GET", data.user)
          this.props.refreshUser(data.user)
        })
        .catch(console.log)
    }
  }



  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <Switch>
            <Route path="/home" render={() => <HomePage />} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/explore-thoughts" component={ExploreThoughts} />
            <Route path="/my-thought" component={CreateThought} />
            <Route path="/write-letter" component={CreateLetter} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/past-thoughts" component={PastThoughts} />
            <Route path="/thought" component={ThoughtPage} />
            <Route path="/edit" render={() => <EditAccount userObj={this.props.currentUser}/> } />
          </Switch>
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </>
    );
  }
}

function msp(state) {
  return {
    currentUser: state.currentUser
  }
}

function mdp(dispatch) {
  return {
    refreshUser: (userObj) => dispatch(refreshUser(userObj))
  }
}

export default connect(msp, mdp)(App)
