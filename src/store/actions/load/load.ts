import {initialState} from '@store/initialState';
import {InitialStateProps} from '@src/interfaces';

export const LOAD_STATE_FROM_MEMORY = 'LOAD_STATE_FROM_MEMORY';

export function load(state: InitialStateProps) {
  return {
    type: LOAD_STATE_FROM_MEMORY,
    data: state,
  };
}

export function reducer(state = initialState, action: ReturnType<typeof load>) {
  const copyState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_STATE_FROM_MEMORY:
      return {...copyState, ...action.data};
    default:
      return copyState;
  }
}
