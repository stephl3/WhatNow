import React from "react";
import { Link, Redirect } from "react-router-dom";
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
    window.location.href = "/";
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

  switchProfile() {
    window.setTimeout(() =>
      window.location.reload(), 100);
  }

  getLinks() {
    if (this.props.loggedIn) {
      // debugger
      return (
        <div className="session-links">
          <Link className="contact-link" to="/contact">Contact</Link>
          <Link className="profile-link" to={`/${this.props.userId}/profile`}>Profile</Link>
          <button id="logout-button" onClick={this.logoutUser}>Logout</button>
        </div>
        <div className="session-buttons">
          <div className="navbar-button-container">
            <Link to={`/${this.props.userId}/profile`} onClick={this.switchProfile} className="profile-link">Profile</Link>
          </div>
          <div className="navbar-button-container">
            <button onClick={this.logoutUser} className="navbar-button">Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="session-buttons">
          <div className="navbar-button-container">
            <button onClick={this.signupModal} className="navbar-button">Signup</button>
          </div>
          <div className="navbar-button-container">
            <button onClick={this.loginModal} className="navbar-button">Login</button>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <Link className="home-link" to="/home">
          <h1>WhatNow</h1>
        </Link>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
