import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import WhativityIndex from './whativity_index'

const mapStateToProps = (state, ownProps) => ({
  whatItems: ownProps.whatItems
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(WhativityIndex);