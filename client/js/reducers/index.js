import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import results from './results';
import votingForm from './votingForm';

const rootReducer = combineReducers({
  results,
  votingForm,
  router: routerReducer,
});

export default rootReducer;
