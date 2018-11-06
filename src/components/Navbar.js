import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT } from "../actions/ActionTypes";

const Navbar = ({ isLoggedin, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Shop-name
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {!isLoggedin && (
            <Fragment>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </Fragment>
          )}
          {isLoggedin && (
            <Fragment>
              <li className="navbar-item">
                <Link to="/add_item" className="nav-link">
                  Add item
                </Link>
              </li>
              <li className="navbar-item">
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    isLoggedin: !!state.currentUser.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleLogout: () => dispatch({ type: LOGOUT })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
