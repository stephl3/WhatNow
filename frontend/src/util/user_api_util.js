import axios from 'axios';

export const fetchUserInfo = userId => {
    debugger
    return axios.get("/api/users/profile", userId);
};