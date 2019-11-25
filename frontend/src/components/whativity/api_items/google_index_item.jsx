import React from 'react';
import { findPlacePhoto } from '../../../util/google_api_util';

class GoogleIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoRef: this.props.place.photos[0].photo_reference,
      photoUrl: ''
    }
    this.renderPhoto = this.renderPhoto.bind(this);
    this.showWhativity = this.showWhativity.bind(this);
    this.handleInterest = this.handleInterest.bind(this);
    this.handleGoing = this.handleGoing.bind(this);
  }

  componentDidMount() {
    this.renderPhoto();
  }

  componentDidUpdate() {
    // this.renderPhoto();
  }

  renderPhoto() {
    findPlacePhoto(this.props.place.photos[0].photo_reference)
      .then(res => this.setState({
        photoUrl: res.headers["x-final-url"]
      })
    )
      // .then(res => console.log(res))
  }

  showWhativity(e) {
    e.preventDefault();
    const selectedTab = this.props.selectedTab.toLowerCase();
    const {itemIdx} = this.props;
    // debugger
    this.props.receiveWhativityImg(selectedTab, itemIdx, this.state.photoUrl);
    this.props.receiveWhativity(this.props.place);
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
    const { place, itemIdx } = this.props
    return (
      <div className="item">
          <div className="google-index-item" onClick={this.showWhativity}>
            <div className="google-item-info">
              <div className="google-item-name">
                {place.name}
              </div>
              {/* <div className="google-item-address">
                {place.formatted_address}
              </div> */}
            </div>
            <div className="photo-viewport yelp">
              <img src={this.state.photoUrl} className="google-item-photo" alt={place.name} />
              <a href="" className="details-button"></a>
            </div>
            <div className="social-buttons hide">
              <button
                onClick={this.handleInterest}
                id={itemIdx}
                className="index-button interest google">
                Interested
              </button>
              <button
                onClick={this.handleGoing}
                id ={itemIdx}
                className="index-button going google">
                Going
              </button>
              <div className="notify"><span id="notifyType" className=""></span></div>
            </div>
          </div>
      </div>
    );
  }
}

export default GoogleIndexItem;