import { connect } from 'react-redux';
import { fetchWhativity } from '../../actions/whativity_actions';
import WhativityShow from './whativity_show';

const mapStateToProps = (state, ownProps) => {
  return {
    whativity: state.entities.whativity[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWhativity: (id) => dispatch(fetchWhativity(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WhativityShow);