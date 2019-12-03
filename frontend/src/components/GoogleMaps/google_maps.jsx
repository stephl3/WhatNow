import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React from 'react';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
  width: '96%',
  height: '42%',
};

class GoogleMap extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    return (
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
    )
  }

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { whativity } = this.props;
    return (
      <div className="google-map" style={{ height: '200px', width: '200px' }}>
        <Map
          google={this.props.google}
          zoom={11}
          style={mapStyles}
          initialCenter={{lat: 37.788268, lng: -122.407545} }
        >
           <Marker 
            onClick={this.onMarkerClick}
            name={'Current Location'}
            position={{ 
              lat: 37.788268,
              lng: -122.407545
            }} 
          />
          <Marker 
            onClick={this.onMarkerClick}
            name={whativity.name}
            position={{ 
              lat: whativity.latitude, 
              lng: -(whativity.longitude) 
            }} 
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="map-info-window">
              {this.state.selectedPlace.name}
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(GoogleMap);