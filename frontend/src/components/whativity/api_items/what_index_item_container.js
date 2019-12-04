import { connect } from 'react-redux';
import { receiveWhativity } from '../../../actions/whativity_actions';
import WhatIndexItem from './what_index_item';
import { addUserWhativity } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  userId: state.session.user.id,
  currentUserWhativities: state.session.user.whativities
});

const mapDispatchToProps = dispatch => ({
  receiveWhativity: whativity => dispatch(receiveWhativity(whativity)),
  addUserWhativity: (userId, whativityId) => dispatch(addUserWhativity(userId, whativityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(WhatIndexItem);