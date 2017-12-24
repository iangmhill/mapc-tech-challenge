import {
  RESULTS_LOAD,
} from './types';

export function resultsLoad(voters) {
  return {
    type: RESULTS_LOAD,
    voters,
  };
}

export function resultsFetch() {
  return dispatch =>
    fetch('/api/voter')
    .then(response => response.json())
    .then((response) => {
      if (!response.success) { throw new Error('Fetch failure'); }
      dispatch(resultsLoad(response.voters));
    });
    // TODO: Tell the user that an error has occured
}
