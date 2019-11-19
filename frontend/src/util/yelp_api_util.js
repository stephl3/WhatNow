import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = userData => (
  axios.get("https://api.yelp.com/v3/events")
);


export const login = userData => {
  return axios.post("/api/users/login", userData);
};
