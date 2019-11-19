import axios from "axios";
const Promise = require("bluebird");
// export const yelpDummy = () => (
//   axios.get("https://api.yelp.com/v3/businesses/search", {
//     headers: {
//       "Authorization": `Bearer kDiTL7nbjCRoEuCcGUcgWzHlwHNAjEkP9e7bWkI0d0wp2CNCSg2ns1sOBGUAovED0YL-Sz-o_HRN3dJuwnNmTg0UvMu5nciZSkXKOujmck2C1n_OPZfCFmX3oTDUXXYx`,
//       "Accept": "application/json",
//       "Content-Type": "application/json",
//       "Origin":
//       "Access-Control-Allow-Origin": "*",

//     },
//     params: {
//       "location": "san francisco, ca",
//       "categories": "breakfast_brunch"
//     }
//   })
// )
export const yelpDummy = () => {
  const params = {
    location: "san francisco, ca",
    categories: "nightlife",
    sort_on: "time_start",
    limit: 5
  }
  const urlProxy = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events';
  Promise.props({
    local: axios({
      url: urlProxy,
      params: params,
      json: true,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
    }).then(res => console.log(res.data))
      .catch(err => console.log(err))
  })
  .then(data => {
    this.setState({
      yelpData: data
    });
  });
}