import axios from 'axios';

export const fetchUserInfo = id => {
    return axios.get(`/api/users/${id}`);
};

export const toggleFriend = (userId, friendId) => {
    return axios.patch(`/api/users/update/${userId}`, {friendId: friendId})
};
