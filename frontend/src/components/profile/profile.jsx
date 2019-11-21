import React from "react";
import '../../stylesheets/profile.scss';
import '../../stylesheets/profile_friends.scss';
import FriendContainer from './friend_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ""
        }
        this.addFriend = this.addFriend.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserInfo(this.props.match.params.userId)
            .then(user => {
                // debugger
                return this.setState({firstName: user.userData.data.firstName})
            });
    }

    addFriend(e) {
        e.preventDefault();
        const {currentUserId} = this.props;
        const friendId = this.props.match.params.userId;
        this.props.addFriend(currentUserId, friendId);
    }

    render() {
        const { friends } = this.props;
        const { firstName } = this.state;
        let renderFriends;
        if (friends) {
            renderFriends = friends.map((friendId, i) => {
                if (friendId != null) {
                    return (
                        <div>
                            <FriendContainer key={i} userId={friendId} />
                        </div>
                    )
                }
            })
        }
        return (
            <div className="profile-wrapper">
                <h2> {firstName}'s Profile Page</h2>
                <div className="friends-container">
                    <h2>Friends</h2>
                    {renderFriends}
                    <button onClick={this.addFriend}>Add Friend</button>
                </div>
                <div className="user-events-container">
                    <h2>Events</h2>
                </div>
            </div>
        );
    }
}

Profile.defaultProps = {
    user:{
        firstName: "Kevin"
    }
}

export default Profile;