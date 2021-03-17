import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import {saga} from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleWare.run(saga);
