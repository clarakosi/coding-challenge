import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import HomePage from './Components/HomePage';
import ReferralPage from './Components/ReferralPage';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/landing/:id/:slug" component={ReferralPage}/>
        </div>
      </Router>
    );
  }
}

export default connect(null, )(App);
