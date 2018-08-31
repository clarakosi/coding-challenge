import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import {
  getReferrals,
  addReferral,
  deleteReferral,
  updateReferral
} from "../Actions";
import { Form, Input, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

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

  modalToggle = () => {
    this.setState({ update: !this.state.update })
  }

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
      <div className="home">
        <h1>Grow the web with referrals!</h1>
        <Form onSubmit={this.addReferral} className="link-form">
          <Input
            type="text"
            name="newReferral"
            value={this.state.newReferral}
            onChange={this.newReferralChangeHandler}
            placeholder="Add a link"
          />
          <Button type="submit">Add</Button>
        </Form>
        <Table hover striped>
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
                    <a href={`landing/${referral.id}/${referral.title}`} target="_blank">
                      {referral.title}
                    </a>
                  </td>
                  <td>{referral.count}</td>
                  <td><a onClick={() => this.updateToggle(index)}>Edit</a></td>
                  <td>
                    <a onClick={() => this.deleteReferral(referral.id)}>Delete</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Modal isOpen={this.state.update} toggle={this.modalToggle}>
          <ModalHeader toggle={this.modalToggle}>Update Link</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.updateChangeHandler}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateReferral}>Update</Button>
            <Button color="secondary" onClick={this.modalToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    referrals: state.referrals
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getReferrals, addReferral, deleteReferral, updateReferral }
  )(HomePage)
);
