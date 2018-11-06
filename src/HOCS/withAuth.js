import React, { Component } from "react";
import { connect } from "react-redux";

const withAuth = ComponentToBeRendered => {
  class Authenticate extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push("/login");
      }
    }

    render() {
      return <ComponentToBeRendered />;
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.id
    };
  }

  return connect(mapStateToProps)(Authenticate);
};

export default withAuth;
