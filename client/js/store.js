import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

export default function configureStore(initialState, history) {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
      )
    )
  );
  return store;
}
