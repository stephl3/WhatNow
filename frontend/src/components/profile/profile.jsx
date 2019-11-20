import React from "react";
import '../../stylesheets/profile.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ""
        }
    }

    componentDidMount() {
        this.props.fetchUserInfo(this.props.match.params.userId)
            .then(user => {
                return this.setState({firstName: user.userData.data.firstName})
            });
    }

    componentDidUpdate() {
        
    }

    addFriend() {
        
    }

    render() {
        const { friends } = this.props;
        const { firstName } = this.state;
        return (
            <div className="profile-wrapper">
                <h2> {firstName}'s Profile Page</h2>
                <div className="friends-container">
                    <h2>Friends</h2>
                    {/* <div>{friends}</div> */}
                    <button onClick={this.addFriend()}>Add Friend</button>
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