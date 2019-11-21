import {
  RECEIVE_YELP_EVENTS,
  RECEIVE_YELP_EVENT
} from '../actions/yelp_actions';

const YelpReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_YELP_EVENTS:
      return action.events.local.data.events;
    case RECEIVE_YELP_EVENT:
      return oldState;
    default:
      return oldState;
  }
};

export default YelpReducer;