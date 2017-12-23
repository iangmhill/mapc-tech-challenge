import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';

import Header from './Header.jsx';
import ResultsPage from './ResultsPage.jsx';
import VotingPage from './VotingPage.jsx';

import './../../sass/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-component">
        <Header />
        <Switch>
          <Route
            exact
            path={'/'}
            component={VotingPage}
          />
          <Route
            exact
            path={'/results'}
            component={ResultsPage}
          />
          <Redirect to={'/'} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
}

export default App;
