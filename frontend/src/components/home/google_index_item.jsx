import React from 'react';
import { findPlacePhoto } from '../../util/google_api_util';

class GoogleIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoRef: this.props.place.photos[0].photo_reference,
      photoUrl: ''
    }
    this.renderPhoto = this.renderPhoto.bind(this);
  }

  componentDidMount() {
    this.renderPhoto();
  }

  renderPhoto() {
    findPlacePhoto(this.props.place.photos[0].photo_reference)
      .then(res => this.setState({
        photoUrl: res.headers["x-final-url"]
      })
    )
      // .then(res => console.log(res))
  }

  render() {
    const { place } = this.props
    return (
          <div className="google-index-item">
            <div>
              <img src={this.state.photoUrl} className="google-item-photo" alt={place.name} />
            </div>
            <div className="google-item-info">
              <div className="google-item-name">
                {place.name}
              </div>
              <div className="google-item-address">
                {place.formatted_address}
              </div>
            </div>
          </div>
    );
  }
}

export default GoogleIndexItem;