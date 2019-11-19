import axios from "axios"
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// lat: 37.788268, lng: -122.407545

export const findGeneralPlaces = () => (
  axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=37.788268,-122.407545&radius=1000`)
);

// export const findGeneralPlaces = () => {
//   axios.get(`http://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+toronto+canada&key=${API_KEY}`)
// };

// `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+toronto+canada&key=AIzaSyAOQ71JQOnz_iBWgO1xVu8XjJbDIkB3Qxo`

// axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAOQ71JQOnz_iBWgO1xVu8XjJbDIkB3Qxo&location=37.788268,-122.407545&radius=1000`)