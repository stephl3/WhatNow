import axios from 'axios';

export const fetchUserInfo = id => {
    return axios.get(`/api/users/${id}`);
};

export const toggleFriend = (userId, friendId) => {
    return axios.patch(`/api/users/update/${userId}`, {friendId: friendId})
};

export const addUserWhativity = (userId, whativityId) => {
    return axios.patch(`/api/users/update/${userId}`, {whativityId: whativityId})
};
