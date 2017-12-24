import { connect } from 'react-redux';

import {
  resultsFetch,
} from './../actions/results';

import App from './../components/App.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // Fetch the voter results when loading the results page
    onResultsEnter: () => dispatch(resultsFetch()),
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
