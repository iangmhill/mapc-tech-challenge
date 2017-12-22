import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';

import './../../sass/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-layout">
      </div>
    )
  }
}

App.propTypes = {
}

export default App;
