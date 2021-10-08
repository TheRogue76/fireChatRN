import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import {saga} from './rootSaga';
import {loadState} from './storeStorage';

// Saga setup
const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
// store setup
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleWare.run(saga);
