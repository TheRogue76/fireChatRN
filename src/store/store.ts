import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';

import rootReducer from './rootReducer';
import {saga} from './rootSaga';
import {loadState} from './storeStorage';

// Storage
RNAsyncStorageFlipper(AsyncStorage);
// Saga setup
const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
// store setup
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
loadState().then(() => {
  // do sth upon successful state loading
});
sagaMiddleWare.run(saga);
