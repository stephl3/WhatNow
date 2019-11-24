import React, { Component } from 'react'

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
        <div className="what-item-info">
          <div className="whativity-item-photo-container">
            <img src={whativity.photoUrl} alt={whativity.name} className="whativity-item-photo"/>
          </div>
          <div className="whativity-item-name">
            {whativity.name} 
          </div>
          <div className="whativity-item-address">
            {whativity.address}
          </div>
        </div>
        <div className="what-item-map">

        </div>
      </div>
    )
  }
}
