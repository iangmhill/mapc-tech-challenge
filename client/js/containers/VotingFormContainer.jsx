import { connect } from 'react-redux';

import {
  votingFormAddressBlur,
  votingFormAddressChange,
  votingFormLocationChange,
  votingFormSupportsCandidateChange,
  votingFormSubmit,
} from './../actions/votingForm';

import VotingForm from './../components/VotingForm.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    address: state.votingForm.address,
    location: state.votingForm.location,
    supportsCandidate: state.votingForm.supportsCandidate,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddressBlur: () => dispatch(votingFormAddressBlur()),
    onAddressChange: (address) => dispatch(votingFormAddressChange(address)),
    onMapClick: (map, settings, marker) =>
      dispatch(votingFormLocationChange({
        lat: marker.latLng.lat(),
        lng: marker.latLng.lng(),
      }, true)),
    onSupportsCandidateChange: supportsCandidate =>
      dispatch(votingFormSupportsCandidateChange(supportsCandidate)),
    onSubmit: (event) => {
      event.preventDefault();
      dispatch(votingFormSubmit());
    },
  };
};

const VotingFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VotingForm);

export default VotingFormContainer;
