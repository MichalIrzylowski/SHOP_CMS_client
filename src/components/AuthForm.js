import React, { Component } from "react";
import { connect } from "react-redux";
import { AUTHENTICATE_REQUEST } from "../actions/ActionTypes";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  changeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const authType = this.props.location.pathname !== "/login";

    this.props.authRequest(this.state, authType);

    this.setState({ login: "", password: "" });
  };

  render() {
    const authType = this.props.location.pathname === "/login";

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <h1 className="text-center">
              {authType ? "Login" : "Register"} to <em>Shop-Name</em> manager.
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor={authType ? "Login" : "Register"}>
                  {authType ? "Login" : "Register"}:
                </label>
                <input
                  className="form-control"
                  type="text"
                  id={authType ? "Login" : "Register"}
                  name="login"
                  value={this.state.login}
                  onChange={this.changeInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.changeInput}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-success"
                disabled={this.props.loading}
              >
                Enter
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authenticateReducer.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authRequest: (userData, isRegister) => {
      dispatch({ type: AUTHENTICATE_REQUEST, userData, isRegister });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
