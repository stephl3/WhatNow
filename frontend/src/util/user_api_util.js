import axios from 'axios';

export const fetchUserInfo = id => {
    // debugger
    return axios.get(`/api/users/${id}`);
};

export const addFriend = (userId, friendId) => {
    return axios.patch(`/api/users/update/${userId}`, {friendId: friendId})
}