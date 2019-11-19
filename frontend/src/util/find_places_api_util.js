import axios from "axios"
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// lat: 37.788268, lng: -122.407545

// export const findGeneralPlaces = () => (
//   axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=37.788268,-122.407545&radius=1000`)
// );

export const findGeneralPlaces = () => (
  axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=san+francisco++point+of+interest&language=en&key=${API_KEY}`
));

// export const findPlaceInfo = (placeId) => (
//   axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,geometry,photo,website,adr_address&key=${API_KEY}`)
// );