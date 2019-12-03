import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
  width: '1000px',
  height: '300px',
};

class GoogleMap extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    const { whativity } = this.props
    debugger
    return (
      <div className="google-map" style={{ height: '200px', width: '200px' }}>
        <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{lat: 37.788268, lng: -122.407545} }
        >
           <Marker 
            title={'You are here!'}
            name={'Union Square'}
            position={{ 
              lat: 37.788268,
              lng: -122.407545
            }} 
          />
          <Marker 
            title={'HELLO'}
            name={'PLACE'}
            position={{ 
              lat: whativity.latitude, 
              lng: -(whativity.longitude) 
            }} 
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(GoogleMap);