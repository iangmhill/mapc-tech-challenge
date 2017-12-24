import {
  RESULTS_LOAD,
} from './types';

/**
 * Load voter information into client state.
 */
export function resultsLoad(voters) {
  return {
    type: RESULTS_LOAD,
    voters,
  };
}

/**
 * Fetch voter information when opening the results tab.
 */
export function resultsFetch() {
  return dispatch =>
    fetch('/api/voter')
    .then(response => response.json())
    .then((response) => {
      if (!response.success) { throw new Error('Fetch failure'); }
      dispatch(resultsLoad(response.voters));
    });
    // TODO: Tell the user if an error has occured
}
