import React from "react";
import '../../stylesheets/profile.scss';
import '../../stylesheets/profile_friends.scss';
import '../../stylesheets/profile_whativities.scss';
// import ProfileWhativityItem from './profile_whativity_item';
import ProfileWhativityItemContainer from './profile_whativity_item_container';
import FriendContainer from './friend_container';
import { fetchWhativity } from "../../actions/whativity_actions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // firstName: "",
      user: this.props.user,
      whativities: [],
      currentUserFriends: this.props.currentUserFriends
    }
    this.toggleFriend = this.toggleFriend.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchWhativities();
    this.props.fetchUserInfo(this.props.match.params.userId)
      .then(user => {
        this.setState({ user: user.userData.data })
        let interested = [];
        user.userData.data.whativities.forEach(id => {
          this.props.fetchWhativity(id)
            .then(whativity => {
              whativity = whativity.whativity.data;
              if (whativity) {  
                interested.push(whativity);
                this.setState({ whativities: interested });
              }
            })  
        })
      })
  }

  toggleFriend(e) {
    e.preventDefault();
    const {currentUser} = this.props;
    const friendId = this.props.match.params.userId;
    const prevFriends = this.props.currentUserFriends;
    if (this.state.currentUserFriends.includes(friendId)) {
      this.props.deleteFriend(currentUser.id, friendId)
        .then(() => prevFriends.splice(prevFriends.indexOf(friendId), 1))
        .then(() => this.setState({ currentUserFriends: prevFriends }))
    } else {
      this.props.addFriend(currentUser.id, friendId)
        .then(() => prevFriends.push(friendId))
        .then(() => this.setState({ currentUserFriends: prevFriends }))
    }
  }

  render() {
    // debugger
    const { friends, currentUser, fetchWhativity, openModal } = this.props;
    const { user } = this.state;
    let renderFriends;
    if (friends) {
      renderFriends = friends.map((friendId, i) => {
        if (friendId != null) {
          return <FriendContainer key={i} userId={friendId} />
        }
      })
    }

    const profileId = this.props.match.params.userId;
    let followButtonLabel = (this.state.currentUserFriends.includes(profileId)) ? (
      "Unfollow"
    ) : (
      "Follow"
    );
    let followButton = (currentUser.id === profileId) ? (
      null
    ) : (
      <button onClick={this.toggleFriend} className="user-info follow-button">{followButtonLabel}</button>
    )

    let userInterested;
    if (this.state.whativities.length > 0) {
      // debugger
      userInterested = this.state.whativities.map((whativityId, i) => {
        return (
          <ProfileWhativityItemContainer
            key={whativityId}
            item={this.state.whativities[i]}
            fetchWhativity={fetchWhativity}
            openModal={openModal}
          />
        );
      });
    }
    

    let userWhativities = this.props.whativities.map( whativity => {
      return (
        <ProfileWhativityItemContainer
          key={whativity.id}
          item={whativity}
          fetchWhativity={fetchWhativity}
          openModal={openModal}
        />
      )
    })

    return (
      <div className="profile-wrapper">
        <div className="profile-container">
          <div className="profile-left-container">
            <div className="user-info-container">
              <div className="user-info name">
                {user.firstName} {user.lastName}
              </div>
              <div className="user-info location">
                San Francisco, CA
              </div>
              <div className="user-info follow">
                <div className="user-info followers">
                  894 followers
                </div>
                {followButton}
              </div>
            </div>
            <div className="profile-photo-container">
              <img src={user.photoUrl} alt="profile photo" className="profile-photo"/>
            </div>
            <div className="friends-container">
              <div className="profile-section-title">
                Friends
              </div>
              <ul className="friends-list">{renderFriends}</ul>
            </div>
          </div>
          <div className="profile-right-container">
            <div className="interested-whativities-container">
              <div className="profile-section-title">
                Interested Whativities
              </div>
              <ul className="interested-whativities-list">
                {userInterested}
              </ul>
            </div>
            <div className="user-whativities-container">
              <div className="profile-section-title">
                Attended Whativities
              </div>
              <ul className="whativities-list">
                {userWhativities}
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