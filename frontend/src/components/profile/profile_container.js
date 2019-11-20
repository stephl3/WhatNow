import { connect } from "react-redux";
import { fetchUserInfo, addFriend } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    currentUserId: state.session.user.id,
    user: state.users[ownProps.match.params.userId],
    friends: state.users.friends
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: userId => dispatch(fetchUserInfo(userId)),
    addFriend: (userId, friendId) => dispatch(addFriend(userId, friendId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);