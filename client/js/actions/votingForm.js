import fetch from 'isomorphic-fetch';

import {
  VOTING_FORM_ADDRESS_CHANGE,
  VOTING_FORM_LOCATION_CHANGE,
  VOTING_FORM_SUPPORTS_CANDIDATE_CHANGE,
  VOTING_FORM_RESET,
} from './types';

const geocoder = new window.google.maps.Geocoder();

export function votingFormAddressChange(address) {
  return {
    type: VOTING_FORM_ADDRESS_CHANGE,
    address,
  };
}

export function votingFormLocationChange(location, geocodeAddress) {
  return (dispatch) => {
    dispatch({
      type: VOTING_FORM_LOCATION_CHANGE,
      location,
    });
    if (geocodeAddress) {
      geocoder.geocode({ latLng: location }, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
          if (results.length > 0) {
            const address = results[0].formatted_address;
            dispatch(votingFormAddressChange(address));
          }
        }
      });
    }
  };
}

export function votingFormAddressBlur() {
  return (dispatch, getState) => {
    const address = getState().votingForm.address;
    geocoder.geocode({ address }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        if (results.length > 0) {
          const location = results[0].geometry.location;
          dispatch(votingFormLocationChange({
            lat: location.lat(),
            lng: location.lng(),
          }));
        }
      }
    });
  };
}

export function votingFormSupportsCandidateChange(supportsCandidate) {
  return {
    type: VOTING_FORM_SUPPORTS_CANDIDATE_CHANGE,
    supportsCandidate,
  };
}

export function votingFormReset() {
  return {
    type: VOTING_FORM_RESET,
  };
}

export function votingFormSubmit() {
  return (dispatch, getState) => {
    const vote = getState().votingForm;
    return fetch('/api/voter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: vote.address,
        location: vote.location,
        supportsCandidate: vote.supportsCandidate,
      }),
    })
    .then(response => response.json())
    .then((response) => {
      if (!response.success) { throw new Error('Vote failure'); }
      dispatch(votingFormReset());
    });
    // TODO: Tell the user that an error has occured
  };
}
