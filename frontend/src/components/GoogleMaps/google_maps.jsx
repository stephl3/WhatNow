import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
  width: '300px',
  height: '300px',
};

class GoogleMap extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let positions = [];
    const { spontaneous, popular, friends } = this.props;
    
    if (spontaneous.length === 0) {
      return null;
    }
    
      for (let i = 0; i < spontaneous.length; i++) {
        if (spontaneous[i][1] === 'yelp') {
          positions.push([spontaneous[i][0].latitude, spontaneous[i][0].longitude]);
        } else {
          positions.push([spontaneous[i][0].geometry.location.lat, spontaneous[i][0].geometry.location.lng])
        }
      }
    // debugger
    return (
      <div className="google-map">
        <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{ lat: 37.788268, lng: -122.407545 }}
        >
          <Marker position={{ lat: positions[0][0], lng: positions[0][1] }} />
          <Marker position={{ lat: positions[1][0], lng: positions[1][1] }} />
          <Marker position={{ lat: positions[2][0], lng: positions[2][1] }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(GoogleMap);