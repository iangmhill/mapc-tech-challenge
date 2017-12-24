import { connect } from 'react-redux';

import ResultsMap from './../components/ResultsMap.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    voters: state.results.voters,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

const ResultsMapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsMap);

export default ResultsMapContainer;
