import React from "react";  
import DeveloperPage from '../developers';

import LisaPicture from '../../images/Lisa_Wen.jpg';
import ChrisPicture from '../../images/Chris_Trinh1.jpg';
import KevinPicture from '../../images/Nathaniel_Suriawijaya.1 copy.jpg';
import StephenPicture from '../../images/Stephen_Lee.jpg';
import KevinMain from '../../images/Kevin-Main.jpg';
import Octicon, { MarkGithub, Mail } from '@primer/octicons-react'
import { IoLogoLinkedin } from 'react-icons/io';

const images = [
  "https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.unsplash.com/photo-1495542779398-9fec7dc7986c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
  "https://images.pexels.com/photos/1868676/pexels-photo-1868676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1115251/pexels-photo-1115251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

]

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0
    };
    this.loginModal = this.loginModal.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 5000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const { currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({ currentImg: newCurrentImg });
  }

  loginModal(e) {
    e.preventDefault();
    this.props.openModal("login");
  }

  render() {
    
    const {currentImg} = this.state;
    const urlString = `url('${images[currentImg]}')`;

    return (
      <div className="splash-wrapper">
        <div className="splash-container-1">
          <button className="whatnow-button" onClick={this.loginModal}>
            <h1>WhatNow</h1>
          </button>
          {/* <div className="whatnow-button"> */}
          {/* </div> */}
          {/* <div className="splash-background-container"> */}
          <div className="splash-background" style={{ backgroundImage: urlString }}></div>
          {/* </div> */}
        </div>
        <div className="splash-container-2">
          <DeveloperPage/>
        </div>
      </div>
    );
  }
}

export default SplashPage;
