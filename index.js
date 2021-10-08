import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import App from './src/App';
import {store} from './src/store/store';
import {saveState} from './src/store/storeStorage';
import {name as appName} from './app.json';

store.subscribe(() => {
  saveState(store.getState());
});

const ProvidedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ProvidedApp);
