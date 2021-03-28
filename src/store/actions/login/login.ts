import {call, put} from 'redux-saga/effects';

import {initialState} from '../../initialState';
import {loginUser} from '../../../config/api';

export const REQUEST_LOGIN_REQUESTED = 'REQUEST_LOGIN_REQUESTED';
export const REQUEST_LOGIN_SUCCESSFUL = 'REQUEST_LOGIN_SUCCESSFUL';
export const REQUEST_LOGIN_FAILURE = 'REQUEST_LOGIN_FAILURE';

export interface PayLoad {
  email: string;
  password: string;
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
    email: payLoad.email,
    password: payLoad.password,
  };
}

export function* fetchLogin(loginPayload: ReturnType<typeof login>) {
  try {
    yield call(loginUser, {
      email: loginPayload.email,
      password: loginPayload.password,
    });
    yield put({
      type: REQUEST_LOGIN_SUCCESSFUL,
      email: loginPayload.email,
    });
  } catch (e) {
    console.log(e);
    yield put({type: REQUEST_LOGIN_FAILURE});
  }
}

export function reducer(state = initialState, action: Action) {
  const copyState = Object.assign({}, state);
  switch (action.type) {
    case REQUEST_LOGIN_REQUESTED:
      copyState.profile.email = '';
      copyState.profile.isLoggedIn = false;
      copyState.profile.loading = true;
      return copyState;
    case REQUEST_LOGIN_SUCCESSFUL:
      copyState.profile.email = action.email;
      copyState.profile.isLoggedIn = true;
      copyState.profile.loading = false;
      return copyState;
    case REQUEST_LOGIN_FAILURE:
      copyState.profile.email = '';
      copyState.profile.isLoggedIn = false;
      copyState.profile.loading = false;
      return copyState;
    default:
      return copyState;
  }
}
