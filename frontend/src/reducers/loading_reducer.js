import {
  NOW_LOADING,
  STOP_LOADING
} from '../actions/loading_actions';

export default (state=false, action) => {
  Object.freeze(state);

  switch (action.type) {
    case NOW_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
};