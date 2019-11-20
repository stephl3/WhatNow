import React from 'react';

class Friend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        // debugger
        const {userId, fetchUserInfo} = this.props;
        fetchUserInfo(userId)
            .then(user => this.setState({user: user.data}))
            // .then(res => console.log(res))
    }

    render() {
        const { key, userId } = this.props;
        const { user } = this.state;
        if (!user.email) {
            // debugger
            return null;
        }
        // debugger
        return (
            <li key={`friend${key}`}>
                {/* {user._id} */}
                {user.firstName} {user.lastName}
            </li>
        )
    }
}

export default Friend;