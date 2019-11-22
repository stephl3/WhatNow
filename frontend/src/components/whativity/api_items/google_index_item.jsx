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
    this.props.receiveWhativityImg(selectedTab, itemIdx, this.state.photoUrl);
    this.props.receiveWhativity(this.props.place);
    this.props.openModal('whativity');
  }

  render() {
    const { place } = this.props
    return (
          <div className="google-index-item" onClick={this.showWhativity}>
            <div className="google-item-info">
              <div className="google-item-name">
                {place.name}
              </div>
              {/* <div className="google-item-address">
                {place.formatted_address}
              </div> */}
            </div>
            <div>
              <img src={this.state.photoUrl} className="google-item-photo" alt={place.name} />
            </div>
            <div className="social-buttons">
              <div className="index-button interest google">
                Interested
              </div>
              <div className="index-button going google">
                Going
              </div>
            </div>
          </div>
    );
  }
}

export default GoogleIndexItem;