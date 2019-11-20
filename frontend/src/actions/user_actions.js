import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

export const receiveUserInfo = userData => {
    return {
        type: RECEIVE_USER_INFO,
        userData
    }
};

export const fetchUserInfo = userId => dispatch => {
    return (UserAPIUtil.fetchUserInfo(userId)
        .then(userData => dispatch(receiveUserInfo(userData))))
}

// export const addFriend = (userId, friendId) => dispatch => (
//     UserAPIUtil.addFriend(userId, friendId)
//         .then(userData => dispatch(receiveUserInfo(userData)))
// )
