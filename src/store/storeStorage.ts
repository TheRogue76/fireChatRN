import MMKVStorage from 'react-native-mmkv-storage';

import {load} from '@store/actions';
import {store} from './store';
import {InitialStateProps} from '@src/interfaces';
import {constants} from '@config';

const dataBase = new MMKVStorage.Loader().withEncryption().initialize();

export const saveState = (data: InitialStateProps) => {
  dataBase.setMap(constants.storeName, data);
};

export const loadState = () => {
  const loadedState = dataBase.getMap<InitialStateProps>(constants.storeName);

  if (loadedState !== null) {
    store.dispatch(load(loadedState));
  }
};
