
import { RECEIVE_NEARBY_PLACES } from '../actions/find_places_actions';

const PlacesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_NEARBY_PLACES:
      return action.places.data.results;
    default:
      return oldState;
  }
};

export default PlacesReducer;