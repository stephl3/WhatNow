import axios from 'axios';

export const fetchUserInfo = id => {
    debugger
    return axios.get(`/api/users/${id}`);
};