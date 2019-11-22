import React from 'react';
import LisaPicture from '../images/Lisa_Wen.jpg';
import ChrisPicture from '../images/Chris_Trinh1.jpg';
import KevinPicture from '../images/Nathaniel_Suriawijaya.1 copy.jpg';
import StephenPicture from '../images/Stephen_Lee.jpg';
import KevinMain from '../images/Kevin-Main.jpg';
import Octicon, { MarkGithub, Mail } from '@primer/octicons-react'
import { IoLogoLinkedin } from 'react-icons/io';

export default class Developers extends React.Component {
  render() {
    return (
      <div className="developer-wrapper">
        <div className="header-container">
          <div className="developer-header">
            Developers       
          </div> 
        </div>
        <div className="developer-container">
          <div className="lisa-developer">
            <div>
              <img src={LisaPicture} alt="Lisa Wen" className="lisa-picture"/>
            </div>
            <div className="lisa-info">
              <div className="lisa-name">Lisa Wen</div>
              <div className="github-links">
                <div>
                  <a href="https://github.com/lisaw97">
                    <Octicon icon={MarkGithub} size='44px' />
                  </a>
                </div>
                <div>
                  <Octicon icon={Mail} size='48px' />
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/lisa-wen-006378133/">
                    <IoLogoLinkedin size="48px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="chris-developer">
            <div>
              <img src={ChrisPicture} alt="Christopher Trinh" className="chris-picture" />
            </div>
            <div className="chris-info">
              <div className="chris-name">Christopher Trinh</div>
              <div className="github-links">
                <div>
                  <a href="https://github.com/chris510">
                    <Octicon icon={MarkGithub} size='44px' />
                  </a>
                </div>
                <div>
                  <Octicon icon={Mail} size='48px' />
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/trinh-christopher/">
                    <IoLogoLinkedin size="48px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="kevin-developer">
            <div >
              <img src={KevinMain} alt="Kevin Suriawijaya" className="kevin-picture" />
            </div>
            <div className="kevin-info">
              <div className="kevin-name">Kevin Suriawijaya</div>
              <div className="github-links">
                <div>
                  <a href="https://github.com/airusk">
                    <Octicon icon={MarkGithub} size='44px'/>
                  </a>
                </div>
                <div>
                  <Octicon icon={Mail} size='48px' />
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/nsuriawijaya/">
                    <IoLogoLinkedin size="48px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="stephen-developer">
            <div className="stephen-picture">
              <img src={StephenPicture} alt="Stephen Lee" className="stephen-picture" />
            </div>
            <div className="stephen-info">
              <div className="stephen-name">Stephen Lee</div>
              <div className="github-links">
                <div>
                  <a href="https://github.com/stephl3">
                    <Octicon icon={MarkGithub} size='44px' />
                  </a>
                </div>
                <div>
                  <Octicon icon={Mail} size='48px' />
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/mrstephenlee1/">
                    <IoLogoLinkedin size="48px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}