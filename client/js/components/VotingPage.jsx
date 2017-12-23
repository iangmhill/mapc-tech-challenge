import React from 'react';
import PropTypes from 'prop-types';

import './../../sass/VotingPage.scss';

class VotingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="votingpage-component">
        This is the voting page
      </div>
    )
  }
}

VotingPage.propTypes = {
}

export default VotingPage;
