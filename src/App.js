import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { refreshUser } from './Redux/actions'

import Header from './Component/Header'
import HomePage from './Component/HomePage';
import Login from './Component/Login'
import Signup from './Component/Signup'
import ExploreThoughts from './Containers/ExploreThoughts'


class App extends React.Component {

  componentDidMount() {
    const token = localStorage.getItem("token")
    // console.log("TOKEN", token)
    if (token) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`},
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
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route path="/home" render={() => <HomePage />} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/explore-thoughts" component={ExploreThoughts}/>
        </Switch>
      </div>
    );
  }
}

function mdp (dispatch) {
  return {
      refreshUser: (userObj) => dispatch(refreshUser(userObj))
  }
}

export default connect(null, mdp) (App)
