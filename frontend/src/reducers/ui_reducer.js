import { combineReducers } from 'redux';

// import filters from './filters_reducer';
import modal from './modal_reducer';
import loading from './loading_reducer';

export default combineReducers({
  // filters,
  modal,
  loading
});
