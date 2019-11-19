
import { RECEIVE_NEARBY_PLACES, RECEIVE_PLACE_INFO } from '../actions/find_places_actions';

const PlacesReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NEARBY_PLACES:
      // return {[action.places.data.results.name]: action.places.data.results}
      return action.places.data.results
    // case RECEIVE_PLACE_INFO:
    //   return Object.assign( {}, oldState, {[action.placeId]: action.info} )
    default:
      return oldState;
  }
};

export default PlacesReducer;