import * as FindPlacesAPIUtil from '../util/find_places_api_util';

export const RECEIVE_NEARBY_PLACES = 'RECEIVE_NEARBY_PLACES';

const receiveNearbyPlaces = places => ({
  type: RECEIVE_NEARBY_PLACES,
  places
});

export const fetchNearbyPlaces = () => dispatch => {
  FindPlacesAPIUtil.findGeneralPlaces()
    .then( places => dispatch(receiveNearbyPlaces(places)));
};