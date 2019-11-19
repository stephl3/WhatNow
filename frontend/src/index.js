import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";

import axios from "axios"

// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

import { findGeneralPlaces } from './util/find_places_api_util';
import { fetchNearbyPlaces } from "./actions/find_places_actions";
import { findPlacePhoto } from './util/find_places_api_util';

// window.findGeneralPlaces = findGeneralPlaces;
// window.fetchNearbyPlaces = fetchNearbyPlaces;
// window.axios = axios;

// export const findGeneralPlaces = () => {
//   axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=37.788268,-122.407545&radius=1000`)
// };

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

  window.findGeneralPlaces = findGeneralPlaces;
  window.fetchNearbyPlaces = fetchNearbyPlaces;
  window.axios = axios;
  window.dispatch = store.dispatch;
  window.findPlacePhoto = findPlacePhoto;

  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);

});
