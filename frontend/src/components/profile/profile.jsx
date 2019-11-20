import React from "react";
import '../../stylesheets/profile.scss';

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
                return this.setState({firstName: user.userData.data.firstName})
            });
    }

    renderFriends() {
        const {friends} = this.props;
        if (!friends) {
            return null;
        }
        return(
            <ul>
                {friends.map((friend, i) => {
                    return (
                        <li key={`friend${i}`}>
                            {friend}
                        </li>
                    )
                })}
            </ul>
        )
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
        return (
            <div className="profile-wrapper">
                <h2> {firstName}'s Profile Page</h2>
                <div className="friends-container">
                    <h2>Friends</h2>
                    {this.renderFriends()}
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