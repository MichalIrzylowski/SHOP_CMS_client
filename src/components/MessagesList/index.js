import React, { Component } from "react";
import { connect } from "react-redux";

import { LOAD_MESSAGES } from "../../actions/ActionTypes";
import Messages from "./Messages";

class MessageList extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  componentDidMount = () => {
    this.props.loadMessages();
  };

  render() {
    const messages = this.props.messages ? (
      <Messages messages={this.props.messages} />
    ) : (
      "Loading..."
    );
    return <div className="container">{messages}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadMessages: () => {
      dispatch({ type: LOAD_MESSAGES });
    }
  };
}

function mapSateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(MessageList);
