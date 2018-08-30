import React, { Component } from 'react';

class ReferralPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }

  componentDidMount() {
    const locArr = window.location.pathname.split("/");
    const title = locArr.pop().replace(/_/g, ' ');
    const id = locArr[2];
    // console.log(id);
    this.setState({
      title
    });
  }
  render() {
    return (
      <div>
        Referral Page {this.state.title}
      </div>
    )
  }
}


export default ReferralPage;