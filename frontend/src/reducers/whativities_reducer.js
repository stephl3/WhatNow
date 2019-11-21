import { RECEIVE_WHATIVITIES, RECEIVE_WHATIVITY, RECEIVE_USER_WHATIVITIES } from '../actions/whativity_actions';

const WhativitiesReducer = (state = { all:[], current:{}, userWhativities:{} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({},state);
  switch(action.type){
    case RECEIVE_WHATIVITIES:
      newState.all = action.whativities.data;
      return newState;
    case RECEIVE_WHATIVITY:
      newState.current = action.whativities.data;
      return newState;
    case RECEIVE_USER_WHATIVITIES:
      newState.userWhativities = action.whativities.data;
      return newState;
    default:
      return state;
  }
};

export default WhativitiesReducer;