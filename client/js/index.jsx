import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './components/App.jsx';
import configureStore from './store';

import './../sass/index.scss';

const history = createHistory();
const store = configureStore(window.__INITIAL_STATE__, history);

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          component={App}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
