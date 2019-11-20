import React from 'react';
import Place from './place';
// import GoogleMaps from '../GoogleMaps/google_maps';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null,
      options: []
    }
    this.handleWhatNow = this.handleWhatNow.bind(this);
  }

  componentDidMount() {
    let num = Math.round(Math.random());
    if (num === 0) {
      this.props.fetchNearbyPlaces()
        // .then(res => console.log(res))
    } else {
      this.props.fetchYelpEvents()
        // .then(res => console.log(res))
    }
    this.setState({ num })
  }

  handleWhatNow(e) {
    e.preventDefault();
    let newOptions;
    if (this.state.num === 0) {
      newOptions = this.props.places;
    } else {
      newOptions = this.props.events;
    }
    this.setState({
      options: newOptions
    })
    // debugger;
  }

  render() {

    const { places, findPlacePhoto } = this.props

    return (
      <div className="home wrapper">
        <div className="home-container-1"></div>
        <div className="home-container-2">
          <div className="what-now-button">
            <button onClick={this.handleWhatNow}>
              WHAT NOW?
            </button>
            <h1>
              {(this.state.options.length > 0) ? this.state.options[0].name : 'none'}
            </h1>
          </div>
          <div className="places-place-wrapper">
            {places.map(place => {
              return (
                <Place
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
            {/* <GoogleMaps
              places={places}
            /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
