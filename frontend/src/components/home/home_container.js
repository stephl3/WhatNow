import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchNearbyPlaces } from '../../actions/find_places_actions';
import Home from '../home/home';

const mapStateToProps = state => ({
  places: state.places
});

const mapDispatchToProps = dispatch => ({
  fetchNearbyPlaces: () => dispatch(fetchNearbyPlaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);