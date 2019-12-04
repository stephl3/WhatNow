import React from 'react';

class WhatIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.showWhativity = this.showWhativity.bind(this);
    this.handleInterest = this.handleInterest.bind(this);
    this.handleGoing = this.handleGoing.bind(this);
  }

  showWhativity(e) {
    e.preventDefault();
    
    this.props.receiveWhativity(this.props.what);
    this.props.openModal('user-whativity');
  }

  handleInterest(e) {
    e.preventDefault();
    e.stopPropagation();
    let idx = Number(e.currentTarget.id);

    document.querySelectorAll(".notify")[idx].classList.toggle("active");
    document.querySelectorAll("#notifyType")[idx].classList.toggle("interesting");

    setTimeout(function () {
      document.querySelectorAll(".notify")[idx].classList.toggle("active");
      document.querySelectorAll("#notifyType")[idx].classList.toggle("interesting");
    }, 3000);

    this.props.addUserWhativity(this.props.userId, this.props.what._id)
  }

  handleGoing(e) {
    e.preventDefault();
    e.stopPropagation();
    let idx = Number(e.currentTarget.id);

    document.querySelectorAll(".notify")[idx].classList.toggle("active");
    document.querySelectorAll("#notifyType")[idx].classList.toggle("attending");

    setTimeout(function () {
      document.querySelectorAll(".notify")[idx].classList.toggle("active");
      document.querySelectorAll("#notifyType")[idx].classList.toggle("attending");
    }, 3000);
  }

  render() {
    const { what, itemIdx } = this.props;

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
          <div className="social-buttons hide">
            <button
              onClick={this.handleInterest}
              id={itemIdx}
              className="index-button interest photo">
              Interested
            </button>
            <button
              onClick={this.handleGoing}
              id={itemIdx}
              className="index-button going photo">
              Going
            </button>
            <div className="notify"><span id="notifyType"></span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatIndexItem;
