import { RECEIVE_RANDOM_WHATIVITIES, RECEIVE_WHATIVITY_IMG } from '../actions/whativity_actions';

const _initialState = {
  spontaneous: [],
  popular: [],
  friends: []
}
const randomWhativiesReducer = (state = _initialState, action) => {
  // debugger
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_RANDOM_WHATIVITIES:
      nextState[action.category] = action.whativities;
      return nextState;
    case RECEIVE_WHATIVITY_IMG:
      debugger
      nextState[action.category][action.idx].imgUrl = action.imgUrl;
      return nextState;
    default:
      return state;
  }
}

export default randomWhativiesReducer;