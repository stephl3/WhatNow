import axios from 'axios';

export const getWhativities = () => {
  return axios.get('/api/whativities');
};
export const getWhativity = (id) => {
  return axios.get(`/api/whativities/${id}`)
}
export const getUserWhativities = (id) => {
  return axios.get(`/api/whativities/user/${id}`);
};