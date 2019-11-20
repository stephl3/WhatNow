import { connect } from "react-redux";
import { fetchUserInfo } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.match.params.userId],
    // friends: state.session.user.friends
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: userId => dispatch(fetchUserInfo(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);