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
    this.state.shuffleChoices = this.shuffleChoices.bind(this);
  }

  componentDidMount() {
    // let num = Math.round(Math.random());
    this.props.fetchNearbyPlaces();
    this.props.fetchYelpEvents();
    // this.props.fetchYelpEvents();
    // this.shuffleChoices();
    // if (num === 0) {
    //   this.props.fetchNearbyPlaces();
    //   // this.shuffleChoices();
    // } else {
    //   this.props.fetchYelpEvents();
    //   // this.shuffleChoices();
    // }
    // this.setState({ num })
          // this.shuffleChoices();

  }

  shuffleChoices() {
    let choices = this.props.places.concat(this.props.events)
    let newSpontaneous = [];
    let newPopular = [];
    let newFriends = [];
    // debugger
    for (let i = 0; i < 3; i++) {
      let randomIdxOne = Math.round(Math.random() * (choices.length - 1));
      let randomIdxTwo = Math.round(Math.random() * (choices.length - 1));
      let randomIdxThree = Math.round(Math.random() * (choices.length - 1));
      // debugger
      let choiceOne = choices[randomIdxOne];
      let choiceTwo = choices[randomIdxTwo];
      let choiceThree = choices[randomIdxThree];
      // debugger
      newSpontaneous.push(choiceOne);
      newPopular.push(choiceTwo);
      newFriends.push(choiceThree);
    }
    this.setState({
      spontaneous: newSpontaneous,
      popular: newPopular,
      friends: newFriends
    })
  }

  handleWhatNow(e) {
    // e.preventDefault();
    // let newOptions = [];
    // if (this.state.num === 0) {
    //   this.props.places.map( place => {
    //     if (newOptions.length < 3) {
    //       newOptions.push([place, 'google'])
    //     }
    //   });
    //   // newOptions = this.props.places;
    // } else if (this.state.num === 1) {
    //   this.props.events.map( event => {
    //     if (newOptions.length < 3) {
    //       newOptions.push([event, 'yelp'])
    //     }
    //     // debugger
    //   });
    //   // newOptions = this.props.events;
    // }

    // this.setState({
    //   options: newOptions,
      
    //   tabVisible: true
    // })
    // debugger
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
          </div>
        </div>
        <div className="home-container-3">
          <div className="google-maps-container">
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
