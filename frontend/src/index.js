import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout, signup } from "./actions/session_actions";
import { fetchUserInfo, addFriend } from './actions/user_actions';
import "./stylesheets/index.scss";

import axios from "axios"

// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

import { findGeneralPlaces } from './util/find_places_api_util';
import { fetchNearbyPlaces } from "./actions/find_places_actions";
import { findPlacePhoto } from './util/find_places_api_util';

// window.findGeneralPlaces = findGeneralPlaces;
// window.fetchNearbyPlaces = fetchNearbyPlaces;
// window.axios = axios;


window.findGeneralPlaces = findGeneralPlaces;

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
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.fetchUserInfo = fetchUserInfo;
  window.findGeneralPlaces = findGeneralPlaces;
  window.fetchNearbyPlaces = fetchNearbyPlaces;
  window.axios = axios;
  window.findPlacePhoto = findPlacePhoto;
  window.addFriend = addFriend;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
