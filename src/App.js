import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ReferralPage from './Components/ReferralPage';

class App extends Component {
  render() {
    return (
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/landing/:id/:slug" component={ReferralPage}/>
        </div>
    );
  }
}

export default withRouter(connect(null, )(App));
 