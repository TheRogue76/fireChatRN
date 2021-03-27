import {initialState} from '../../initialState';

export const LOAD_STATE_FROM_MEMORY = 'LOAD_STATE_FROM_MEMORY';

export function load(state: any) {
  return {
    type: LOAD_STATE_FROM_MEMORY,
    payload: state,
  };
}

export function reducer(state = initialState, action: any) {
  const copyState = Object.assign({}, state);
  switch (action.type) {
    case 'LOAD_STATE_FROM_MEMORY':
      return action.payload;
    default:
      return copyState;
  }
}
