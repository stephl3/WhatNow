import React from 'react';
import YelpIndexContainer from '../yelp/yelp_index_container';
import YelpIndex from '../yelp/yelp_index';
import WhativitiesTab from '../whativity/whativities_tab';
// import GoogleMaps from '../GoogleMaps/google_maps';
import LoadingModal from '../modal/loading_modal';

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
      friends: [],
      modal: false
    }
    this.handleWhatNow = this.handleWhatNow.bind(this);
    this.state.shuffleChoices = this.shuffleChoices.bind(this);
    this.assignType = this.assignType.bind(this);
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

  assignType() {
    let choices = [];
    this.props.places.forEach( place => {
      choices.push([place, "google"]);
    });
    this.props.events.forEach( event => {
      choices.push([event, "yelp"]);
    });
    return choices
  }

  shuffleChoices() {
    // let choices = this.props.places.concat(this.props.events)
    // let choices = [];
    // this.props.places.forEach( place => {
    //   choices.push([place, 'google'])
    // });
    let choices = this.assignType();
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

    this.props.nowLoading();
    this.setState({
      spontaneous: newSpontaneous,
      popular: newPopular,
      friends: newFriends,
      tabVisible: true,
      modal: true
    })
    window.setTimeout(() => {
      this.props.stopLoading();
      this.setState({
        modal: false
      })
    }, 1500)
  }

  handleWhatNow(e) {
    e.preventDefault();
    this.shuffleChoices();
    // let newOptions = [];

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
    // // debugger
    // let newOptions = [];
    // if (this.state.num === 0) {
    //   this.props.places.map( place => {
    //     if (newOptions.length <= 3) {
    //       newOptions.push([place, 'google'])
    //     }
    //   });
    //   // newOptions = this.props.places;
    // } else {
    //   this.props.events.map( event => {
    //     if (newOptions.length <= 3) {
    //       newOptions.push([event, 'yelp'])
    //     }
    //     // debugger
    //   });
    //   // newOptions = this.props.events;
    // }

  }

  render() {
    const { places, events, findPlacePhoto } = this.props
    const loadingModal = this.state.modal ? <LoadingModal /> : null;

  return (
      <div className="home-wrapper">
        {loadingModal}
        <div className="home-container-1">
            {/* <WhativityIndex
              whatItems={this.state.options} */}
            <div className ={`whativities-tab-wrapper ${this.state.tabVisible}`}>
              <WhativitiesTab
                // whativities={this.state.options}
                popular={this.state.popular}
                spontaneous={this.state.spontaneous}
                friends={this.state.friends}
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
