import React from 'react';
import PropTypes from 'prop-types';

import ResultsMapContainer from './../containers/ResultsMapContainer.jsx';

import './../../sass/ResultsPage.scss';

class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="resultspage-component">
        <ResultsMapContainer />
      </div>
    )
  }
}

ResultsPage.propTypes = {
}

export default ResultsPage;
