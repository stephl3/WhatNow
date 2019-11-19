import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchNearbyPlaces } from '../../actions/find_places_actions';
import { findPlacePhoto } from '../../util/find_places_api_util';
import Home from '../home/home';

const mapStateToProps = state => ({
  places: state.places
});

const mapDispatchToProps = dispatch => ({
  fetchNearbyPlaces: () => dispatch(fetchNearbyPlaces()),
  findPlacePhoto: (photoRef) => findPlacePhoto(photoRef)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);