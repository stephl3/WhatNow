import { connect } from 'react-redux';
import { receiveWhativity } from '../../actions/whativity_actions';
import ProfileWhativityItem from './profile_whativity_item';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  receiveWhativity: whativity => dispatch(receiveWhativity(whativity))
  // openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWhativityItem);