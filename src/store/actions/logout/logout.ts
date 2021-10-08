import {initialState} from '@store/initialState';

export const REQUEST_LOGOUT_REQUEST = 'REQUEST_LOGOUT_REQUEST';

interface Action {
  type: typeof REQUEST_LOGOUT_REQUEST;
}

export function logout() {
  return {
    type: REQUEST_LOGOUT_REQUEST,
  };
}

export const reducer = (state = initialState, action: Action) => {
  let copyState = Object.assign({}, state);
  switch (action.type) {
    case REQUEST_LOGOUT_REQUEST:
      copyState.profile.isLoggedIn = false;
      copyState.profile.email = '';
      copyState.profile.loading = false;
      return copyState;
    default:
      return copyState;
  }
};
