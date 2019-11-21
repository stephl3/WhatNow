import { RECEIVE_USER_INFO } from '../actions/user_actions';

export default function(state = {}, action) {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USER_INFO:
            // debugger
            return action.userData.data;
        default:
            return state;
    }
}