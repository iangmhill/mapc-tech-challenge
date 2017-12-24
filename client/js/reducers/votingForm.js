import {
  VOTING_FORM_ADDRESS_CHANGE,
  VOTING_FORM_LOCATION_CHANGE,
  VOTING_FORM_SUPPORTS_CANDIDATE_CHANGE,
  VOTING_FORM_RESET,
} from './../actions/types';

const votingForm = (state = {
  address: '',
  location: null,
  supportsCandidate: null,
}, action) => {
  switch (action.type) {
    case VOTING_FORM_ADDRESS_CHANGE:
      return Object.assign({}, state, {
        address: action.address,
      });
    case VOTING_FORM_LOCATION_CHANGE:
      return Object.assign({}, state, {
        location: action.location,
      });
    case VOTING_FORM_SUPPORTS_CANDIDATE_CHANGE:
      return Object.assign({}, state, {
        supportsCandidate: action.supportsCandidate,
      });
    case VOTING_FORM_RESET:
      return Object.assign({}, state, {
        address: '',
        location: null,
        supportsCandidate: null,
      });
    default:
      return state;
  }
};

export default votingForm;
