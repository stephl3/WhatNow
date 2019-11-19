import * as FindPlacesAPIUtil from '../util/find_places_api_util';

export const RECEIVE_NEARBY_PLACES = 'RECEIVE_NEARBY_PLACES';

const receiveNearbyPlaces = data => ({
  type: RECEIVE_NEARBY_PLACES,
  data
});

export const fetchNearbyPlaces = () => dispatch => {
  FindPlacesAPIUtil.findGeneralPlaces()
    .then( data => dispatch(receiveNearbyPlaces(data)));
};