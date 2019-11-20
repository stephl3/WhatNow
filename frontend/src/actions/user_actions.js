import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
// export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';

export const receiveUserInfo = userData => {
    return {
        type: RECEIVE_USER_INFO,
        userData
    }
};

export const fetchUserInfo = userId => dispatch => {
    // debugger
    return (UserAPIUtil.fetchUserInfo(userId)
        .then(userData => dispatch(receiveUserInfo(userData))))
}
