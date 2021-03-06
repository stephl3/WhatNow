import React from 'react';
// import Place from './place';
import YelpIndexContainer from '../yelp/yelp_index_container';
import YelpIndex from '../yelp/yelp_index';
import WhativitiesTab from '../whativity/whativities_tab';
// import GoogleMaps from '../GoogleMaps/google_maps';
import LoadingModal from '../modal/loading_modal';
import GoogleMap from '../GoogleMaps/google_maps';
import WhativityIndex from '../whativity/whativity_index';

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
    // this.props.fetchNearbyPlaces();
    // this.props.fetchYelpEvents();
    this.props.fetchWhativities();
  }

  assignType() {
    let choices = [];
    this.props.places.forEach( place => {
      choices.push([place, "google"]);
    });
    this.props.events.forEach( event => {
      choices.push([event, "yelp"]);
    });
    this.props.whativities.forEach( whativity => {
      choices.push([whativity, "whativity"])
    })
    return choices
    
  }

  shuffleChoices() {
    let choices = this.assignType();
    let newSpontaneous = [];
    let newPopular = [];
    let newFriends = [];
    

    // Randomizes choice of events fetched by the API; no repeated choices.
    while (newSpontaneous.length < 3) {
      let randomChoiceIdx = Math.round(Math.random() * (choices.length - 1));
      let randomChoice = choices[randomChoiceIdx];

      if (!newSpontaneous.includes(randomChoice)) newSpontaneous.push(randomChoice);
    }

    while (newPopular.length < 3) {
      let randomChoiceIdx = Math.round(Math.random() * (choices.length - 1));
      let randomChoice = choices[randomChoiceIdx];

      if (!newPopular.includes(randomChoice) && !newSpontaneous.includes(randomChoice)) newPopular.push(randomChoice);
    }

    while (newFriends.length < 3) {
      let randomChoiceIdx = Math.round(Math.random() * (choices.length - 1));
      let randomChoice = choices[randomChoiceIdx];

      if (!newFriends.includes(randomChoice) && !newPopular.includes(randomChoice) && !newSpontaneous.includes(randomChoice) ) newFriends.push(randomChoice);
    }
    // for (let i = 0; i < 3; i++) {
    //   let randomIdxOne = Math.round(Math.random() * (choices.length - 1));
    //   let randomIdxTwo = Math.round(Math.random() * (choices.length - 1));
    //   let randomIdxThree = Math.round(Math.random() * (choices.length - 1));
    //   let choiceOne = choices[randomIdxOne];
    //   let choiceTwo = choices[randomIdxTwo];
    //   let choiceThree = choices[randomIdxThree];
    //   newSpontaneous.push(choiceOne);
    //   newPopular.push(choiceTwo);
    //   newFriends.push(choiceThree);
    // }

    this.updateRandomWhativitiesState(newSpontaneous, newPopular, newFriends);
    
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
    }, 1300)
  }

  updateRandomWhativitiesState(newSpontaneous, newPopular, newFriends) {
    const { receiveRandomWhativities } = this.props;
    receiveRandomWhativities("spontaneous", newSpontaneous);
    receiveRandomWhativities("popular", newPopular);
    receiveRandomWhativities("friends", newFriends);
  }

  handleWhatNow(e) {
    e.preventDefault();
    window.location.href = "/#/home/spontaneous";
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
    //   });
    //   // newOptions = this.props.events;
    // }

    // this.setState({
    //   options: newOptions,
      
    //   tabVisible: true
    // })
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
    //   });
    //   // newOptions = this.props.events;
    // }

  }

  render() {
    const { places, events, findPlacePhoto } = this.props
    const whatNowBtnPos = (this.state.tabVisible) ? (
      ""
    ) : (
      "center"
    );
    const loadingModal = this.state.modal ? <LoadingModal /> : null;
    // debugger
  return (
    <div className="home-wrapper">
      {loadingModal}
      <div className="home-container-main">
        {/* <WhativityIndex
              whatItems={this.state.options} */}
        <div className={`whativities-tab-wrapper ${this.state.tabVisible}`}>
          <WhativitiesTab
            // whativities={this.state.options}
            popular={this.state.popular}
            spontaneous={this.state.spontaneous}
            friends={this.state.friends}
          />
        </div>
      </div>
      <div className={`home-container-what ${whatNowBtnPos}`}>
        <div className="what-now-button-container">
          <button onClick={this.handleWhatNow} className="what-now-button">
            WhatNow
          </button>
        </div>
      </div>
      {/* <div className="home-container-3"> */}
        {/* <div className="google-maps-container">
          <GoogleMap
            popular={this.state.popular}
            spontaneous={this.state.spontaneous}
            friends={this.state.friends}
          />
        </div> */}
      {/* </div> */}
    </div>
  );
  }
}

export default Home;
