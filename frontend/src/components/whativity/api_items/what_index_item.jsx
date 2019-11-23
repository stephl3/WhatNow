import React from 'react';

class WhatIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { what } = this.props;

    return (
      <div className="what-index-item">
        <div className="what-item-info">
          <div className="what-item-name">
            {what.name}
          </div>
        </div>
        <div className="photo-viewport what">
          <img src={what.photoUrl} alt={what.name} className="what-item-photo" />
        </div>
        <div className="social-buttons">
          <div className="index-button interest photo">
            Interested
            </div>
          <div className="index-button going photo">
            Going
          </div>
        </div>
      </div>
    )
  }
}

export default WhatIndexItem;
