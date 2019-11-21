import axios from "axios";
const Promise = require("bluebird");
const API_KEY = process.env.REACT_APP_YELP_API_KEY;

export const fetchYelpEvents = () => {
  // refactor with search params
  const params = {
    location: "san francisco, ca",
    // sort_on: "time_start",
    limit: 50
  }
  const urlProxy = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events';
  return Promise.props({
    local: axios({
      url: urlProxy,
      params: params,
      json: true,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
    })
  })
}

export const fetchYelpFeaturedEvents = () => {
  // refactor with search params
  const params = {
    location: "san francisco, ca",
    limit: 5
  }

  const urlProxy = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events/featured';
  return Promise.props({
    local: axios({
      url: urlProxy,
      params: params,
      json: true,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
    })
  })
}

export const fetchYelpEvent = (eventId) => {
  // refactor with search params
  const params = {
    location: "san francisco, ca",
  }
  const urlProxy = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events/${eventId}`;
  Promise.props({
    local: axios({
      url: urlProxy,
      params: params,
      json: true,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
    })
  })
}

