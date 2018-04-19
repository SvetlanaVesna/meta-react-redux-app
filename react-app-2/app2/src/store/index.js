import { createStore, applyMiddleware } from 'redux';

import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from './history';

import rootReducer from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(epicMiddleware, routerMiddleware(history), createLogger())
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  // if (module.hot) {
  //   module.hot.accept('../epics', () => {
  //     // eslint-disable-next-line
  //     const rootEpicNext = require('../epics').default;
  //     epicMiddleware.replaceEpic(rootEpicNext);
  //   });
  //
  //   module.hot.accept('../reducers', () => {
  //     // eslint-disable-next-line
  //     const nextRootReducer = require('../reducers').default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}
