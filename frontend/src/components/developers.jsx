import React from 'react';
import LisaPicture from '../images/Lisa_Wen.jpg';
import ChrisPicture from '../images/Chris_Trinh1.jpg';
import KevinPicture from '../images/Nathaniel_Suriawijaya.1 copy.jpg';
import StephenPicture from '../images/Stephen_Lee.jpg';
import Octicon, { Beaker, Zap, MarkGithub } from '@primer/octicons-react'


export default class Developers extends React.Component {
  render() {
    return (
      <div className="developer-wrapper">
        <div className="header-container">
          <div className="developer-header">
            DEVELOPERS          
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
                <Octicon icon={MarkGithub} size='medium' />
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
                <Octicon icon={MarkGithub} size='medium' />
              </div>
            </div>
          </div>
          <div className="kevin-developer">
            <div >
              <img src={KevinPicture} alt="Kevin Suriawijaya" className="kevin-picture" />
            </div>
            <div className="kevin-info">
              <div className="kevin-name">Kevin Suji</div>
              <div className="github-links">
                <Octicon icon={MarkGithub} size='medium' />
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
                <Octicon icon={MarkGithub} size='medium' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}