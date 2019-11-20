import {getWhativities, getWhativity, getUserWhativities} from '../util/whativity_api_util';

export const RECEIVE_WHATIVITIES = 'RECEIVE_WHATIVITIES';
export const RECEIVE_WHATIVITY = 'RECEIVE_WHATIVITY';
export const RECEIVE_USER_WHATIVITIES = 'RECEIVE_USER_WHATIVITIES';

export const receiveWhativities = whativities => ({
  type: RECEIVE_WHATIVITIES,
  whativities
});
export const receiveWhativity = whativity => ({
  type: RECEIVE_WHATIVITY,
  whativity
});
export const receiveUserWhativities = whativities => ({
  type: RECEIVE_USER_WHATIVITIES,
  whativities
});

export const fetchWhativities = () => dispatch => (
  getWhativities()
    .then(whativities => dispatch(receiveWhativities(whativities)))
    .catch(err => console.log(err))
);
export const fetchWhativity = (id) => dispatch => (
  getWhativity(id)
    .then(whativity => dispatch(receiveWhativity(whativity)))
    .catch(err => console.log(err))
);
export const fetchUserWhativities = (id) => dispatch => (
  getUserWhativities(id)
    .then(whativities => dispatch(receiveWhativities(whativities)))
    .catch(err => console.log(err))
);