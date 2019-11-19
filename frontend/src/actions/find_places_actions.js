import * as FindPlacesAPIUtil from '../util/find_places_api_util';

export const RECEIVE_NEARBY_PLACES = 'RECEIVE_NEARBY_PLACES';

const receiveNearbyPlaces = places => ({
  type: RECEIVE_NEARBY_PLACES,
  places
});

// const receivePlaceInfo = (placeId, info) => ({
//   type: RECEIVE_PLACE_INFO,
//   placeId,
//   info
// });

export const fetchNearbyPlaces = () => dispatch => {
  FindPlacesAPIUtil.findGeneralPlaces()
    .then( places => dispatch(receiveNearbyPlaces(places)));
};



