import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN,
  RECEIVE_FRIENDS
} from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
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
    // case RECEIVE_FRIENDS:
    //   debugger
    //   // nextState[user].friends = action.userData.data.friends;
    //   return nextState;
    default:
      return state;
  }
}
