import { connect } from 'react-redux';

import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  signedIn: state.session.isSignedIn,
  errors: state.errors.session,
  formType: 'Sign up'
});

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(signup(user)),
  switchForm: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);