import { combineReducers } from "redux";


import ui from "./ui_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";
import entities from  "./entities_reducer";

const RootReducer = combineReducers({
    session,
    errors,
    ui,
    entities
});

export default RootReducer;
