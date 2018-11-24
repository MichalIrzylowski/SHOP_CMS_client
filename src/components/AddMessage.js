import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_MESSAGE_REQUEST } from "../actions/ActionTypes";

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add message
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: message => {
      dispatch({ type: ADD_MESSAGE_REQUEST, message });
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddMessage);
