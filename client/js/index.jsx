import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import AppContainer from './containers/AppContainer.jsx';
import configureStore from './store';

import './../sass/index.scss';

const history = createHistory();
const store = configureStore(window.__INITIAL_STATE__, history);

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          component={AppContainer}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
