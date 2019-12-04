import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN
} from "../actions/session_actions";

import {
  RECEIVE_FRIEND,
  REMOVE_FRIEND,
  RECEIVE_USER_WHATIVITY
} from '../actions/user_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    case RECEIVE_FRIEND:
      nextState.user.friends = action.userData.data.friends;
      return nextState;
    case REMOVE_FRIEND:
      nextState.user.friends = action.userData.data.friends;
      return nextState;
    case RECEIVE_USER_WHATIVITY:
      nextState.user.whativities = action.userData.data.whativities;
      return nextState;
    default:
      return state;
  }
}
