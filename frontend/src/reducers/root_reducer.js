import { combineReducers } from "redux";
import places from './google_reducer';
import ui from "./ui_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";
import entities from  "./entities_reducer";
import users from "./users_reducer";
import events from "./yelp_reducer"

const RootReducer = combineReducers({
    session,
    errors,
    users,
    ui,
    entities,
    places,
    events
});

export default RootReducer;
