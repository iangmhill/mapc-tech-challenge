import React from 'react';
import PropTypes from 'prop-types';

import BooleanField from './BooleanField.jsx';
import MapField from './MapField.jsx';

import constants from './../constants';

import './../../sass/VotingForm.scss';

class VotingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="votingform-component">
        <h2>Cast your vote</h2>
        <MapField
          address={this.props.address}
          affirmativeMarker={this.props.supportsCandidate}
          label={constants.VOTING_FORM.LOCATION_MAP_FIELD.LABEL}
          location={this.props.location}
          onAddressBlur={this.props.onAddressBlur}
          onAddressChange={this.props.onAddressChange}
          onMapClick={this.props.onMapClick}
        />
        <BooleanField
          label={constants.VOTING_FORM.SUPPORT_BOOLEAN_FIELD.LABEL}
          name={'voting-form-support'}
          value={this.props.supportsCandidate}
          onChange={this.props.onSupportsCandidateChange}
        />
        <button
          type={'submit'}
          onClick={this.props.onSubmit}
        >
          {constants.VOTING_FORM.SUBMIT}
        </button>
      </form>
    )
  }
}

VotingForm.propTypes = {
  address: PropTypes.string,
  location: PropTypes.object,
  supportsCandidate: PropTypes.bool,
  onAddressBlur: PropTypes.func,
  onAddressChange: PropTypes.func,
  onMapClick: PropTypes.func,
  onSupportsCandidateChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default VotingForm;
