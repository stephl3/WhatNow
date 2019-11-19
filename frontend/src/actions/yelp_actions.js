import * as YelpAPIUtil from '../util/yelp_api_util';

export const RECEIVE_YELP_EVENTS = 'RECEIVE_YELP_EVENTS';
export const RECEIVE_YELP_EVENT = 'RECEIVE_YELP_EVENT';

const receiveYelpEvents = events => ({
  type: RECEIVE_YELP_EVENTS,
  events
});

export const fetchYelpEvents = () => dispatch => (
  YelpAPIUtil.fetchYelpEvents()
    .then(events => dispatch(receiveYelpEvents(events)))
);