import React from 'react';
import Details from './details';
import GoogleMaps from '../GoogleMaps/google_maps';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNearbyPlaces();
  }

  render() {

    const { places, findPlacePhoto } = this.props

    return (
      <div className="home wrapper">
        <div className="home-container-1"></div>
        <div className="home-container-2">
          <div className="what-now-button">
            WHAT NOW?
          </div>
          <div className="places-details-wrapper">
            {places.map(place => {
              return (
                <Details
                  place={place}
                  key={place.id}
                  findPlacePhoto={findPlacePhoto}
                />
              )
            })}
          </div>
        </div>
        <div className="home-container-3">
          <div className="google-maps-container">
            <GoogleMaps
              places={places}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
