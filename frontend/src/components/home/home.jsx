import React from 'react';
import Place from './place';
import YelpIndexContainer from '../yelp/yelp_index_container';
import YelpIndex from '../yelp/yelp_index';
import WhativitiesTab from '../whativity/whativities_tab';
// import GoogleMaps from '../GoogleMaps/google_maps';

import WhativityIndex from './whativity_index';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null,
      options: [],
      tabVisible: false,
      spontaneous: [],
      popular: [],
      friends: []
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
    let newOptions = [];
    if (this.state.num === 0) {
      this.props.places.map( place => {
        if (newOptions.length <= 3) {
          newOptions.push([place, 'google'])
        }
      });
      // newOptions = this.props.places;
    } else {
      this.props.events.map( event => {
        if (newOptions.length <= 3) {
          newOptions.push([event, 'yelp'])
        }
        // debugger
      });
      // newOptions = this.props.events;
    }

    this.setState({
      options: newOptions,
      
      tabVisible: true
    })
  }

  render() {
    const { places, events, findPlacePhoto } = this.props


    return (
      <div className="home wrapper">
        <div className="home-container-1">
            {/* <WhativityIndex
              whatItems={this.state.options} */}
            <div className ={`whativities-tab-wrapper ${this.state.tabVisible}`}>
              <WhativitiesTab
                whativities={this.state.options}
                visibility={this.state.tabVisible}
              />
            </div>
        </div>
        <div className="home-container-2">
          <div className="what-now-button">
            <button onClick={this.handleWhatNow}>
              WHAT NOW?
            </button>
            <h1>
              {/* {(this.state.options.length > 0) ? this.state.options[0].name : 'none'} */}
            </h1>
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
