import { combineReducers } from "redux";
// import session from "./session_reducer";
// import errors from "./errors_reducer";
// import tweets from "./tweets_reducer";
import PlacesReducer from './places_reducer';

const RootReducer = combineReducers({
  places: PlacesReducer
//   session,
//   errors,
//   tweets
});

export default RootReducer;
