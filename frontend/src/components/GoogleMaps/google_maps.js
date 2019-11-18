import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class GoogleMap extends React.Component{
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDs6-GT7EdCy9OUh7OXZReKwJt3gafFKks'
})(GoogleMap);
// export default GoogleMap;