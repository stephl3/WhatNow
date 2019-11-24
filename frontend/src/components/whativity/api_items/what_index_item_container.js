import { connect } from 'react-redux';
import { receiveWhativity } from '../../../actions/whativity_actions';
import WhatIndexItem from './what_index_item';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receiveWhativity: whativity => dispatch(receiveWhativity(whativity))
});

export default connect(mapStateToProps, mapDispatchToProps)(WhatIndexItem);