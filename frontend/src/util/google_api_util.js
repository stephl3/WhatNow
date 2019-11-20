import axios from "axios"
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// lat: 37.788268, lng: -122.407545

// export const findGeneralPlaces = () => (
//   axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=37.788268,-122.407545&radius=1000`)
// );

// export const findGeneralPlaces = () => (
//   axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=san+francisco++point+of+interest&language=en&key=${API_KEY}`)
// );


export const findPlacePhoto = (photoRef) => (
  axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${API_KEY}`)
);

export const findGeneralPlaces = () => {
  const urlProxy = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=san+francisco++point+of+interest&language=en&key=${API_KEY}`

  return (
    axios.get(urlProxy)
  )
}