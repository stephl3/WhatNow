import { RECEIVE_RANDOM_WHATIVITIES } from '../actions/whativity_actions';

const _initialState = {
  spotaneous: [],
  popular: [],
  friends: []
}
const randomWhativiesReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_RANDOM_WHATIVITIES:
      nextState[action.category] = action.whativities;
      return nextState;
    default:
      return state;
  }
}

export default randomWhativiesReducer;