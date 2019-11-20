import React from 'react';

class GoogleIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPhoto() {
    // this.props.findPlacePhoto(this.props.place.photos[0].photo_reference)
    //   .then(res => this.setState({
    //     photoUrl: res.request.responseURL
    //   })
    // )
  }

  render() {
    const { place } = this.state
    return (
      <div className="google-index-wrapper">
        <div className="google-index-container">
          <div className="google-index-item">
            <div className="google-item-photo"></div>
            <div className="google-item-info">
              <div className="google-item-name">
                {place.name}
              </div>
              <div className="google-item-address">
                {place.formatted_address}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleIndexItem;