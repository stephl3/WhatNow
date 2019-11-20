import {getWhativities, getWhativity, getUserWhativities} from '../util/whativity_api_util';

export const RECEIVE_WHATIVITIES = 'RECEIVE_WHATIVITIES';
export const RECEIVE_WHATIVITY = 'RECEIVE_WHATIVITY';
export const RECEIVE_USER_WHATIVITIES = 'RECEIVE_USER_WHATIVITIES';

export const receiveWhativities = whativites => ({
  type: RECEIVE_WHATIVITIES,
  whativites
});
export const receiveWhativity = whativity => ({
  type: RECEIVE_WHATIVITY,
  whativity
});
export const receiveUserWhativities = whativites => ({
  type: RECEIVE_USER_WHATIVITIES,
  whativites
});

export const fetchWhativities = () => dispatch => (
  getWhativities()
    .then(whativites => dispatch(receiveWhativities(whativites)))
    .catch(err => console.log(err))
);
export const fetchWhativity = (id) => dispatch => (
  getWhativity(id)
    .then(whativity => dispatch(receiveWhativity(whativity)))
    .catch(err => console.log(err))
);
export const fetchUserWhativities = (id) => dispatch => (
  getUserWhativities(id)
    .then(whativites => dispatch(receiveWhativities(whativites)))
    .catch(err => console.log(err))
);