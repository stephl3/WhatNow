import React from 'react';

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

  render() {
    const { key, userId } = this.props;
    const { user } = this.state;
    if (!user.email) {
      return null;
    }
    return (
      <li className="friend" key={`friend${key}`}>
        <div className="friend-photo-container">
          <img src={user.photoUrl} alt="friend photo" className="friend-photo"/>
        </div>
        <div className="friend-name">
          {user.firstName} {user.lastName}
        </div>
      </li>
    )
  }
}

export default Friend;