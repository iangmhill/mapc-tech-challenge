import React from 'react';
import PropTypes from 'prop-types';

import './../../sass/ResultsPage.scss';

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="resultspage-component">
        This is the results page
      </div>
    )
  }
}

ResultsPage.propTypes = {
}

export default ResultsPage;
