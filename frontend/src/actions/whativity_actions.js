import {getWhativities, getWhativity, getUserWhativities} from '../util/whativity_api_util';

export const RECEIVE_WHATIVITIES = 'RECEIVE_WHATIVITIES';
export const RECEIVE_WHATIVITY = 'RECEIVE_WHATIVITY';
export const RECEIVE_USER_WHATIVITIES = 'RECEIVE_USER_WHATIVITIES';
export const RECEIVE_RANDOM_WHATIVITIES = 'RECEIVE_RANDOM_WHATIVITIES';
export const RECEIVE_WHATIVITY_IMG = 'RECEIVE_WHATIVITY_IMG';

export const receiveWhativities = whativities => ({
  type: RECEIVE_WHATIVITIES,
  whativities
});

export const receiveWhativity = whativity => {
  return ({
    type: RECEIVE_WHATIVITY,
    whativity
  })
};

export const receiveUserWhativities = whativities => ({
  type: RECEIVE_USER_WHATIVITIES,
  whativities
});

export const receiveRandomWhativities = (category, whativities) => {
  return ({
  type: RECEIVE_RANDOM_WHATIVITIES,
  category,
  whativities
  })
};

export const receiveWhativityImg = (category, idx, imgUrl) => {
  return {
    type: RECEIVE_WHATIVITY_IMG,
    category,
    idx, 
    imgUrl
  };
}

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

export const fetchUserWhativities = (userId) => dispatch => (
  getUserWhativities(userId)
    .then(whativities => dispatch(receiveWhativities(whativities)))
    .catch(err => console.log(err))
);