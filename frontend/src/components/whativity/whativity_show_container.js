import { connect } from 'react-redux';
import { fetchWhativity } from '../../actions/whativity_actions';
import WhativityShow from './whativity_show';

const mapStateToProps = (state, ownProps) => ({
  whativity: state.entities.whativity.current
});

const mapDispatchToProps = dispatch => {
  // return {
  //   fetchWhativity: (id) => dispatch(fetchWhativity(id))
  // };
};

export default connect(mapStateToProps, null)(WhativityShow);