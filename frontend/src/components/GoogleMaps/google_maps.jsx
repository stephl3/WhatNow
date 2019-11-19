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
    // this.createMarkers = this.createMarkers.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchNearbyPlaces();
  // }

  // createMarkers() {
  //   this.props.places.map(place => {
  //     let lat = place.geometry.location.lat;
  //     let lng = place.geometry.location.lng;
  //     return (
  //       <Marker position={{lat: lat, lng: lng}}/>
  //     )
  //   })
  // }

  // findPlaceInfo() {
  //   this.props.places.map(place => {
  //     let place_id = place.
  //   })
  // }

  
  render() {
    return (
      <div className="google-map">
        <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{ lat: 37.788268, lng: -122.407545}}
        >
          <Marker position={{ lat: 37.788268, lng: -122.407545 }} />
          {this.props.places.map(marker => (
            <Marker
              position={{lat:marker.geometry.location.lat,
              lng:marker.geometry.location.lng}}
              key = {marker.geometry.place_id}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(GoogleMap);