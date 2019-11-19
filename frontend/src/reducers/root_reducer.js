import { combineReducers } from "redux";
import places from './places_reducer';
import ui from "./ui_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";
import events from "./yelp_reducer"

const RootReducer = combineReducers({
    session,
    errors,
    ui,
    places,
    events
});

export default RootReducer;
