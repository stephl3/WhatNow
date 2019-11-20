import React from "react";
// import { Link } from "react-router-dom";
import '../../stylesheets/navbar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.signupModal = this.signupModal.bind(this);
    this.loginModal = this.loginModal.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  signupModal(e) {
    e.preventDefault();
    this.props.openModal("signup");
  }

  loginModal(e) {
    e.preventDefault();
    this.props.openModal("login");
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          {/* <Link to={"/events"}>All Events</Link> */}
          {/* <Link to={"/profile"}>Profile</Link> */}
          {/* <Link to={"/new_tweet"}>Write a Tweet</Link> */}
          <button id="logout-button" onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="session-buttons">
          <button onClick={this.signupModal}>Signup</button>
          <button onClick={this.loginModal}>Login</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <h1>WhatNow</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
