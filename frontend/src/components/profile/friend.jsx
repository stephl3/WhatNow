import React from 'react';

import { Link } from 'react-router-dom';

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const { userId, fetchUserInfo } = this.props;
    fetchUserInfo(userId)
      .then(user => this.setState({user: user.data}))
  }

  switchProfile() {
    window.setTimeout(() =>
      window.location.reload(), 100);
  }

  render() {
    const { key, userId } = this.props;
    const { user } = this.state;
    if (!user.email) {
      return null;
    }
    return (
      <li className="friend" key={`friend${key}`}>
        <Link to={`/${userId}/profile`} onClick={this.switchProfile} className="friend-profile-link">
          <div className="friend-photo-container">
            <img src={user.photoUrl} alt="friend photo" className="friend-photo"/>
          </div>
          <div className="friend-name">
            {user.firstName} {user.lastName}
          </div>
        </Link>
      </li>
    )
  }
}

export default Friend;