import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout, signup } from "./actions/session_actions";
import { fetchUserInfo } from './actions/user_actions';
import "./stylesheets/index.scss";
import { findGeneralPlaces } from './util/google_api_util';
import { fetchNearbyPlaces } from './actions//google_actions';

import { findPlacePhoto } from './util/google_api_util';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser }
    };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }
  
  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.findGeneralPlaces = findGeneralPlaces;
  window.fetchNearbyPlaces = fetchNearbyPlaces;
  // window.axios = axios;
  // window.findPlacePhoto = findPlacePhoto;
  window.findPlacePhoto = findPlacePhoto;
  // window.addFriend = addFriend;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

