import {initialState} from '../../initialState';

interface Action {
  type: 'REQUEST_LOGOUT_REQUEST';
}

export const REQUEST_LOGOUT_REQUEST = 'REQUEST_LOGOUT_REQUEST';

export function logout() {
  return {
    type: REQUEST_LOGOUT_REQUEST,
  };
}

export const reducer = (state = initialState, action: Action) => {
  let copyState = Object.assign({}, state);
  switch (action.type) {
    case 'REQUEST_LOGOUT_REQUEST':
      copyState.profile.isLoggedIn = false;
      copyState.profile.username = '';
      copyState.profile.loading = false;
      copyState.profile.token = '';
      return copyState;
    default:
      return copyState;
  }
};
