import { combineReducers } from 'redux';

import whativity from './whativities_reducer';
import randomWhativities from './random_whativities_reducer';

export default combineReducers({
  whativity,
  randomWhativities
});