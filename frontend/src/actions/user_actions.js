import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

export const receiveUserInfo = userData => {
    debugger
    return {
    type: RECEIVE_USER_INFO,
    userData
    }
};

export const fetchUserInfo = userId => dispatch => {
    debugger
    return (UserAPIUtil.fetchUserInfo(userId)
        .then(userData => dispatch(receiveUserInfo(userData))))
}