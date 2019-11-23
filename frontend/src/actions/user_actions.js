import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

export const receiveUserInfo = userData => {
    return {
        type: RECEIVE_USER_INFO,
        userData
    }
};

export const receiveFriend = userData => ({
    type: RECEIVE_FRIEND,
    userData
})

const removeFriend = userData => ({
    type: REMOVE_FRIEND,
    userData
})

export const fetchUserInfo = userId => dispatch => {
    return (UserAPIUtil.fetchUserInfo(userId)
        .then(userData => dispatch(receiveUserInfo(userData))))
}

export const addFriend = (userId, friendId) => dispatch => (
    UserAPIUtil.toggleFriend(userId, friendId)
        .then(userData => {
            dispatch(receiveFriend(userData))
        })
)

export const deleteFriend = (userId, friendId) => dispatch => (
    UserAPIUtil.toggleFriend(userId, friendId)
        .then(userData => {
            dispatch(removeFriend(userData))
        })
)