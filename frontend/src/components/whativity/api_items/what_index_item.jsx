import React from 'react';

class WhatIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.showWhativity = this.showWhativity.bind(this);
  }



  showWhativity(e) {
    e.preventDefault();

    const selectedTab = this.props.selectedTab.toLowerCase();
    const { itemIdx } = this.props;
    
    this.props.receiveWhativity(this.props.what);
    this.props.openModal('user-whativity');
  }

  render() {
    const { what } = this.props;

    return (
      <div className="item">
        <div className="what-index-item" onClick={this.showWhativity}>
          <div className="what-item-info">
            <div className="what-item-name">{what.name}</div>
          </div>
          <div className="photo-viewport what">
            <img
              src={what.photoUrl}
              alt={what.name}
              className="what-item-photo"
            />
          </div>
          <div className="social-buttons">
            <div className="index-button interest photo">Interested</div>
            <div className="index-button going photo">Going</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatIndexItem;
