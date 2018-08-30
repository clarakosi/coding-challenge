import React, { Component } from "react";
import { connect } from "react-redux";
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
    return <div>Referral Page {this.state.title}</div>;
  }
}

export default connect(
  null,
  { pageVisited }
)(ReferralPage);
