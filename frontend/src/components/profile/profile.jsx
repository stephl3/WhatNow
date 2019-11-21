import React from "react";
import '../../stylesheets/profile.scss';
import '../../stylesheets/profile_whativities.scss';
import WhativityItem from './profile_whativity_item'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      whativities: []
    }
  }

  componentDidMount() {
    return this.props.fetchUserInfo(this.props.match.params.userId)
      .then(user => {
        //replace poop festival with line below it
        this.setState({ whativities: [{ name: "poop festival", address: "poop st." }]})
        // this.setState({ whativities: user.userData.data.whativities })
        this.setState({firstName: user.userData.data.firstName})
      }); 
  }

  componentDidUpdate() {
    
  }

  addFriend() {
    
  }

  render() {
    const { friends } = this.props;
    const { firstName, whativities } = this.state;
    return (
      <div className="profile-wrapper">
        <h2> {firstName}'s Profile Page</h2>
        <div className="friends-container">
          <h2>Friends</h2>
          {/* <div>{friends}</div> */}
          <button onClick={this.addFriend()}>Add Friend</button>
        </div>
        <div className="user-whativities-container">
          <h2>Attended Events</h2>
          <ul className="whativities-list">
            {whativities.map(whativity => (
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