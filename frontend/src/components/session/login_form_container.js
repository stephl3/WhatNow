import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: 'Log in'
});

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(login(user)),
  switchForm: () => dispatch(openModal('signup')),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);