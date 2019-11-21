import React from "react";
import '../../stylesheets/profile.scss';
import '../../stylesheets/profile_whativities.scss';
import WhativityItem from './profile_whativity_item';
import FriendContainer from './friend_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
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
            this.setState({ firstName: user.userData.data.firstName })
          }); 
    }

    renderFriends() {
        const {friends} = this.props;
        if (!friends) {
            return null;
        }
        // return (<FriendContainer key={0} userId={friends[0]} />)
        // return(
            // <ul>
                friends.map((friendId, i) => {
                    if (friendId != null) {
                        // debugger
                        return (
                            <div>
                                <FriendContainer key={i} userId={friendId} />
                            </div>
                        )
                    }
                    
                })
            // </ul>
        // )
    }

    addFriend(e) {
        e.preventDefault();
        const {currentUserId} = this.props;
        const friendId = this.props.match.params.userId;
        this.props.addFriend(currentUserId, friendId);
    }

    render() {
        const { friends } = this.props;
        const { firstName, whativities } = this.state;
        let renderFriends;
        if (friends) {
            renderFriends = friends.map((friendId, i) => {
                if (friendId != null) {
                    // debugger
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
              <div className="user-whativities-container">
                <h2>Attended Events</h2>
                <ul className="whativities-list">
                  {whativities.map(whativity => (
                    <WhativityItem key={whativity._id} props={whativity} />
                  ))}
                </ul>
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