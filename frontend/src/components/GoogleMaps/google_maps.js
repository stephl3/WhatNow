import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
  width: '500px',
  height: '500px',
};

class GoogleMap extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchNearbyPlaces();
  }
  
  render() {
    return (
      <div className="google-map">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 37.788268, lng: -122.407545}}
        >
          <Marker position={{ lat: 37.788268, lng: -122.407545 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(GoogleMap);