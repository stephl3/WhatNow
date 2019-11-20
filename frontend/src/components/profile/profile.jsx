import React from "react";
import '../../stylesheets/profile.scss';
import WhativityItem from './profile_whativity_item'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      users:{
        whativities: []
      }
    }
  }

  componentDidMount() {
    this.props.fetchUserInfo(this.props.match.params.userId)
      .then(user => {
        return this.setState({firstName: user.userData.data.firstName})
      });
    
  }

  componentWillReceiveProps(newState) {
    this.setState({ users:{whativities: newState.whativities }});
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
        <div className="user-whativities-container">
          <ul className="whativities-list">{this.state.users.whativities.map(whativity => (
              <WhativityItem key={whativity._id} props={whativity}/>
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