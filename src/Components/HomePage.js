import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getReferrals,
  addReferral,
  deleteReferral,
  updateReferral
} from "../Actions";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newReferral: "",
      update: false,
      title: "",
      index: 0
    };
  }

  componentDidMount() {
    this.props.getReferrals();
  }

  newReferralChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  addReferral = event => {
    event.preventDefault();
    const title = this.state.newReferral;
    this.props.addReferral(title);
  };
  updateToggle = index => {
    const title = this.props.referrals[index].title;
    this.setState({
      update: !this.state.update,
      index,
      title
    });
  };
  updateChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  updateReferral = event => {
    event.preventDefault();
    const id = this.props.referrals[this.state.index].id;
    const title = this.state.title;

    this.props.updateReferral(id, title);
    this.setState({
      update: !this.state.update
    });
  };

  deleteReferral = id => {
    this.props.deleteReferral(id);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addReferral}>
          <input
            type="text"
            name="newReferral"
            value={this.state.newReferral}
            onChange={this.newReferralChangeHandler}
          />
          <button type="submit">Add Referral</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Link Title</th>
              <th>Clicks</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.referrals.map((referral, index) => {
              return (
                <tr key={referral.id}>
                  <td>
                    <a href={`landing/${referral.id}/${referral.title}`}>
                      {referral.title}
                    </a>
                  </td>
                  <td>{referral.count}</td>
                  <td onClick={() => this.updateToggle(index)}>Edit</td>
                  <td
                    onClick={() => {
                      this.deleteReferral(referral.id);
                    }}
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <form
          onSubmit={this.updateReferral}
          style={{ display: this.state.update ? null : "none" }}
        >
          <input
            name="title"
            value={this.state.title}
            onChange={this.updateChangeHandler}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    referrals: state.referrals
  };
};

export default connect(
  mapStateToProps,
  { getReferrals, addReferral, deleteReferral, updateReferral }
)(HomePage);
