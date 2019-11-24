import { connect } from 'react-redux';

import { fetchWhativity } from '../../actions/whativity_actions';
import UserWhativity from './user_whativity';

const mapStateToProps = (state, ownProps) => ({
  whativity: state.entities.whativity.current
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserWhativity);