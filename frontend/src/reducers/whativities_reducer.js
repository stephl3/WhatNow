import { RECEIVE_WHATIVITIES, RECEIVE_WHATIVITY, RECEIVE_USER_WHATIVITIES, RECEIVE_WHATIVITY_IMG } from '../actions/whativity_actions';

const WhativitiesReducer = (state = { all:[], current:{ imgUrl:""}, userWhativities:{} }, action) => {
  Object.freeze(state);
  let newState = Object.assign({},state);
  switch(action.type){
    case RECEIVE_WHATIVITIES:
      newState.all = action.whativities.data;
      return newState;
    case RECEIVE_WHATIVITY:
      let imgUrl = newState.current.imgUrl;
      newState.current = action.whativity;
      newState.current.imgUrl = imgUrl;
      return newState;
    case RECEIVE_USER_WHATIVITIES:
      newState.userWhativities = action.whativities.data;
      return newState;
    case RECEIVE_WHATIVITY_IMG:
      newState.current.imgUrl = action.imgUrl;
      return newState;
    default:
      return state;
  }
};

export default WhativitiesReducer;