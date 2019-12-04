import { connect } from "react-redux";

import { fetchUserInfo, addFriend, deleteFriend } from '../../actions/user_actions';
import { fetchWhativities, fetchWhativity} from '../../actions/whativity_actions';
import { openModal } from '../../actions/modal_actions';

import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.user,
    user: state.users[ownProps.match.params.userId],
    currentUserFriends: state.session.user.friends,
    friends: state.users.friends,
    whativities: state.entities.whativity.all,
    interested: state.users.whativities
});

const mapDispatchToProps = dispatch => ({
    fetchUserInfo: userId => dispatch(fetchUserInfo(userId)),
    addFriend: (userId, friendId) => dispatch(addFriend(userId, friendId)),
    deleteFriend: (userId, friendId) => dispatch(deleteFriend(userId, friendId)),
    fetchWhativities: () => dispatch(fetchWhativities()),
    fetchWhativity: id => dispatch(fetchWhativity(id)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);