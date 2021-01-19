import React from 'react'
import './App.css';
import 'primeflex/primeflex.css'

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { refreshUser } from './Redux/actions'

import Header from './Component/Header'
import HomePage from './Component/HomePage';
import Login from './Component/Login'
import Signup from './Component/Signup'
import ExploreThoughts from './Containers/ExploreThoughts'
import CreateThought from './Component/CreateThought';
import CreateLetter from './Component/CreateLetter';
import ProfilePage from './Component/ProfilePage';
import PastThoughts from './Component/PastThoughts'
import ThoughtPage from './Containers/ThoughtPage'
import EditAccount from './Component/EditAccount'
import Footer from './Component/Footer';





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
      <div className="App">
          <div className="App-header">
            <Header />
        </div>
        <div className="main">
          <Switch>
            <Route path="/home" render={() => <HomePage />} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/explore-thoughts" component={ExploreThoughts} />
            <Route path="/my-thought" component={CreateThought} />
            <Route path="/write-letter" component={CreateLetter} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/past-thoughts" component={PastThoughts} />
            <Route path="/thought" component={ThoughtPage} />
            <Route path="/edit" component={EditAccount} />
          </Switch>
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

function mdp(dispatch) {
  return {
    refreshUser: (userObj) => dispatch(refreshUser(userObj))
  }
}

export default connect(null, mdp)(App)
