import React from 'react';

class YelpIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: ''
    }
    this.showWhativity = this.showWhativity.bind(this);
    this.handleInterest = this.handleInterest.bind(this);
    this.handleGoing = this.handleGoing.bind(this);
  }

  showWhativity(e) {
    e.preventDefault();
    const selectedTab = this.props.selectedTab.toLowerCase();
    const { itemIdx } = this.props;
    // debugger
    this.props.receiveWhativityImg(selectedTab, itemIdx, this.state.photoUrl);
    this.props.receiveWhativity(this.props.event)
    this.props.openModal('whativity');
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
    const { event, itemIdx } = this.props;

    return (
      <div className="item">
        <div className="yelp-index-item" onClick={this.showWhativity}>
          <div className="yelp-item-info">
            <div className="yelp-item-name">{event.name}</div>
            {/* <div className="yelp-item-description">{event.description}</div>
            <div className="yelp-item-time-start">{event.time_start}</div> */}
          </div>
          <div className="photo-viewport yelp">
            <img src={event.image_url} alt={event.name} className="yelp-item-photo" />
          </div>
          <div className="social-buttons hide">
            <button
              onClick={this.handleInterest}
              id={itemIdx}
              className="index-button interest yelp">
              Interested
            </button>
            <button
              onClick={this.handleGoing}
              id={itemIdx}
              className="index-button going yelp">
              Going
            </button>
            <div className="notify"><span id="notifyType" className=""></span></div>
          </div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default YelpIndexItem;