import {
  RESULTS_LOAD,
} from './../actions/types';

const results = (state = {
  voters: [],
}, action) => {
  switch (action.type) {
    case RESULTS_LOAD:
      return Object.assign({}, state, {
        voters: action.voters,
      });
    default:
      return state;
  }
};

export default results;
