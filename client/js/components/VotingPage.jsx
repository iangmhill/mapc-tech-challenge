import React from 'react';
import PropTypes from 'prop-types';

import VotingFormContainer from './../containers/VotingFormContainer.jsx';

import './../../sass/VotingPage.scss';

class VotingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="votingpage-component">
        <VotingFormContainer />
      </div>
    )
  }
}

VotingPage.propTypes = {
}

export default VotingPage;
