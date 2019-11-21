import { RECEIVE_RANDOM_WHATIVITIES } from '../actions/whativity_actions';

const 
const randomWhativiesReducer = (state = {}, action) => {
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