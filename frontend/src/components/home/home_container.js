import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchNearbyPlaces } from '../../actions/google_actions';
import { findPlacePhoto } from '../../util/google_api_util';
import { fetchYelpEvents } from '../../actions/yelp_actions';
import Home from '../home/home';
import { nowLoading, stopLoading } from '../../actions/loading_actions';
import { receiveRandomWhativities } from '../../actions/whativity_actions';

const mapStateToProps = state => ({
  places: state.places,
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  fetchNearbyPlaces: () => dispatch(fetchNearbyPlaces()),
  findPlacePhoto: (photoRef) => findPlacePhoto(photoRef),
  fetchYelpEvents: () => dispatch(fetchYelpEvents()),
  nowLoading: () => dispatch(nowLoading()),
  stopLoading: () => dispatch(stopLoading()),
  receiveRandomWhativities: (category, whativities) => dispatch(receiveRandomWhativities(category, whativities))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);