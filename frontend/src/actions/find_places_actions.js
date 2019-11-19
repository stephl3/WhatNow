import * as FindPlacesAPIUtil from '../util/find_places_api_util';

export const RECEIVE_NEARBY_PLACES = 'RECEIVE_NEARBY_PLACES';
export const RECEIVE_PLACE_PHOTO = 'RECEIVE_PLACE_PHOTO';

const receiveNearbyPlaces = places => ({
  type: RECEIVE_NEARBY_PLACES,
  places
});

const receivePlacePhoto = (placeName, data) => ({
  type: RECEIVE_PLACE_PHOTO,
  placeName,
  data
});

export const fetchNearbyPlaces = () => dispatch => {
  FindPlacesAPIUtil.findGeneralPlaces()
    .then( places => dispatch(receiveNearbyPlaces(places)));
};

// export const fetchPlacePhoto = () => dispatch => {

// }



