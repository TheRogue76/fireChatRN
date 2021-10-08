import {initialState} from '@store/initialState';
import {InitialStateProps} from '@src/interfaces';

export const LOAD_STATE_FROM_MEMORY = 'LOAD_STATE_FROM_MEMORY';

interface Action {
  type: typeof LOAD_STATE_FROM_MEMORY;
  data?: InitialStateProps;
}

export function load(state: InitialStateProps) {
  return {
    type: LOAD_STATE_FROM_MEMORY,
    payload: state,
  };
}

export function reducer(state = initialState, action: Action) {
  const copyState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_STATE_FROM_MEMORY:
      return {...copyState, ...action.data};
    default:
      return copyState;
  }
}
