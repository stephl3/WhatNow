import React, { Component } from 'react'
import GoogleMaps from '../GoogleMaps/google_maps';

export default class UserWhativity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { whativity } = this.props;
    if (!whativity) {
      return null;
    }

    return (
      <div id="hoopla"> 
        <div className="what-show-wrapper">
          <div className="what-show-photo-container">
            <img src={whativity.photoUrl} alt={whativity.name} className="what-show-photo"/>
          </div>
          <div className="what-show-info">
            <div className="what-show-name">
              {whativity.name} 
            </div>
            <div className="what-show-address">
              {whativity.address}
            </div>
          </div>
          <div className="what-show-map">
            <GoogleMaps 
              whativity={whativity}
            />
          </div>
        </div>
      </div>
    )
  }
}
