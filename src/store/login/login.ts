import {initialState} from '../initialState';

export const REQUEST_LOGIN_REQUESTED = 'REQUEST_LOGIN_REQUESTED';
export const REQUEST_LOGIN_SUCCESSFUL = 'REQUEST_LOGIN_SUCCESSFUL';
export const REQUEST_LOGIN_FAILURE = 'REQUEST_LOGIN_FAILURE';

export interface PayLoad {
  username: string;
  token: string;
}
interface Action extends PayLoad {
  type:
    | 'REQUEST_LOGIN_REQUESTED'
    | 'REQUEST_LOGIN_SUCCESSFUL'
    | 'REQUEST_LOGIN_FAILURE';
}

export function login(payLoad: PayLoad) {
  return {
    type: REQUEST_LOGIN_REQUESTED,
    username: payLoad.username,
    token: payLoad.token,
  };
}

export function reducer(state = initialState, action: Action) {
  const copyState = Object.assign({}, state);
  switch (action.type) {
    case REQUEST_LOGIN_REQUESTED:
      copyState.profile.username = '';
      copyState.profile.token = '';
      copyState.profile.isLoggedIn = false;
      copyState.profile.loading = true;
      return copyState;
    case REQUEST_LOGIN_SUCCESSFUL:
      copyState.profile.username = action.username;
      copyState.profile.token = action.token;
      copyState.profile.isLoggedIn = true;
      copyState.profile.loading = false;
      return copyState;
    case REQUEST_LOGIN_FAILURE:
      copyState.profile.username = '';
      copyState.profile.token = '';
      copyState.profile.isLoggedIn = false;
      copyState.profile.loading = false;
      return copyState;
    default:
      return copyState;
  }
}
