import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { logout } from './actions/session_actions';
import { setAuthToken } from "./util/session_api_util";
import "./stylesheets/index.scss";
// import { addUserWhativity } from './util/user_api_util';
import { addUserWhativity } from './actions/user_actions';

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
  
  // test start
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.addUserWhativity = addUserWhativity;
  // test end

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

