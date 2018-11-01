import React, { Component } from "react";
import { connect } from "react-redux";
import { LOGIN_REQUEST } from "../actions/ActionTypes";

class LoginForm extends Component {
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

    this.props.loginRequest(this.state);

    this.setState({ login: "", password: "" });
  };

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <h1>
            Admin panel for <em>Shop-Name</em>
          </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="login">Login</label>
              <input
                className="form-control"
                type="text"
                id="login"
                name="login"
                value={this.state.login}
                onChange={this.changeInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Login</label>
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
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.login.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginRequest: userData => {
      dispatch({ type: LOGIN_REQUEST, userData });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
