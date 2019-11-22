import { connect } from 'react-redux';
import { openModal, closeModal} from '../../actions/modal_actions';
import SplashPage from './splash_page';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);