import { combineReducers } from "redux";
import PlacesReducer from './places_reducer';
import ui from "./ui_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";

const RootReducer = combineReducers({
    session,
    errors,
    ui,
  places: PlacesReducer
});

export default RootReducer;
