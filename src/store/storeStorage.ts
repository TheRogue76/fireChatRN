import AsyncStorage from '@react-native-async-storage/async-storage';

import {load} from './actions/load/load';
import {store} from './store';
import {InitialStateProps} from '../interfaces';

export const saveState = async (store: InitialStateProps) => {
  try {
    await AsyncStorage.setItem('state', JSON.stringify(store));
  } catch (e) {
    console.log(`failed to save state ${e}`);
  }
};
export const loadState = async () => {
  try {
    let strigifiedState = await AsyncStorage.getItem('state');
    if (strigifiedState !== null) {
      const newState = JSON.parse(strigifiedState);
      store.dispatch(load(newState));
    }
  } catch (e) {
    console.log(`failed to load state ${e}`);
  }
};
