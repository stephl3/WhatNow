import { connect } from "react-redux";
import { addFriend } from '../../actions/session_actions';
import { fetchUserInfo } from "../../actions/user_actions";
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.user.id,
    // user: state.users[ownProps.match.params.userId]
    friends: state.session.user.friends
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: userId => dispatch(fetchUserInfo(userId)),
    addFriend: (userId, friendId) => dispatch(addFriend(userId, friendId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);