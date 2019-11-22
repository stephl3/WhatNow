import React from "react";
import '../../stylesheets/profile.scss';
import '../../stylesheets/profile_friends.scss';
import '../../stylesheets/profile_whativities.scss';
import WhativityItem from './profile_whativity_item';
import FriendContainer from './friend_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // firstName: "",
      user: "",
      whativities: []
    }
    this.addFriend = this.addFriend.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserInfo(this.props.match.params.userId)
    return this.props.fetchUserInfo(this.props.match.params.userId)
      .then(user => {
        //replace poop festival with line below it
        this.setState({ whativities: [{ name: "poop festival", address: "poop st." }] })
        // this.setState({ whativities: user.userData.data.whativities })
        // this.setState({ firstName: user.userData.data.firstName })
        this.setState({ user: user.userData.data })
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
    const { user, whativities } = this.state;
    let renderFriends;
    if (friends) {
      renderFriends = friends.map((friendId, i) => {
        if (friendId != null) {
          return (
            <FriendContainer key={i} userId={friendId} />
          )
        }
      })
    }
    return (
      <div className="profile-wrapper">
        <div className="profile-container">
          <div className="profile-left">
            <div className="profile-photo-container">
              <img src={user.photoUrl} alt="profile photo" className="profile-photo"/>
            </div>
            <div className="friends-container">
              <h2>Friends</h2>
              <ul className="friends-list">{renderFriends}</ul>
            </div>
          </div>

          <div className="profile-right">
            <div className="user-info">
              <h2>
                {" "}
                {user.firstName} {user.lastName}
              </h2>
              <p>San Francisco, United States</p>
              <span>894 Followers</span>
              <button onClick={this.addFriend}>Follow</button>
            </div>
            <div className="interested-whativities-container">
              <h2>Upcoming Events</h2>
            </div>

            <div className="user-whativities-container">
              <h2>Attended Events</h2>
              <ul className="whativities-list">
                {whativities.map(whativity => (
                  <WhativityItem key={whativity._id} props={whativity} />
                ))}
              </ul>
            </div>
          </div>
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