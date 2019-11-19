import React from "react";
import '../../stylesheets/profile.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchUserInfo(this.props.match.params.userId);
    }

    addFriend() {

    }

    render() {
        // debugger
        // const { user, friends } = this.props;
        return (
          <div className="profile-wrapper">
            {/* <h2> {user.firstName}'s Profile Page</h2>
            <div className="friends-container">
                <h2>Friends</h2>
                <div>{friends}</div>
                <button onClick={this.addFriend()}>Add Friend</button>
            </div> */}
            <div className="user-events-container">
                <h2>Events</h2>
            </div>
          </div>
        );
    }
}

export default Profile;