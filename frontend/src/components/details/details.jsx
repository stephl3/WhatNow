// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';
// import { link } from 'fs';

class Details extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.fetchNearbyPlaces();
  }

  render(){
    return(
      <div className="places-wrapper">
        <div className="places-container">
          {this.props.places.map(place => {
            return (
             <div className="place-details">
                <div className="place-name">
                  {place.name}
                </div>
                <div className="place-photo">
                  {place.photos[0].html_attributions[0]}
                </div>
                <div className="place-rating">
                  {place.rating}
                </div>
                <div className="place-address">
                  {place.formatted_address}
                </div>
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Details;