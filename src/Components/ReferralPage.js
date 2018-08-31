import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { pageVisited } from "../Actions/index";

class ReferralPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  componentDidMount() {
    const locArr = window.location.pathname.split("/");
    const title = locArr.pop().replace(/%20/g, " ");
    const id = locArr[2];

    this.setState({ title });
    this.props.pageVisited(id);
  }

  render() {
    return <div className="referral-page">
      <h1>{this.state.title} are awesome!</h1>
      <h2>Come join Tim's World Wide Web!</h2>
      <img src="https://www.getambassador.com/hubfs/pages/press/ambassador_seal.svg?t=1535668591954" alt="Ambassador Logo" />
      </div>;
  }
}

export default withRouter(
  connect(
    null,
    { pageVisited }
  )(ReferralPage)
);
