import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const {userId, fetchUserInfo} = this.props;
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
            <li key={`friend${key}`}>
                {user.firstName} {user.lastName}
            </li>
        )
    }
}

export default Friend;