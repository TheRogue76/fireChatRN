import {call, put} from 'redux-saga/effects';

import {InitialStateProps, SignUpProps} from '../../../interfaces';
import {createUser} from '../../../config/api';

export const REQUEST_SIGNUP_REQUEST = 'REQUEST_SIGNUP_REQUEST';
export const SUCCESS_SIGNUP_REQUEST = 'SUCCESS_SIGNUP_REQUEST';
export const FAILURE_SIGNUP_REQUEST = 'FAILURE_SIGNUP_REQUEST';

export function signup(payload: SignUpProps) {
  return {
    type: REQUEST_SIGNUP_REQUEST,
    email: payload.email,
    password: payload.password,
  };
}

export function* fetchSignup(signupPayload: ReturnType<typeof signup>) {
  try {
    yield call(createUser, {
      email: signupPayload.email,
      password: signupPayload.password,
    });
    yield put({type: SUCCESS_SIGNUP_REQUEST, email: signupPayload.email});
  } catch (e) {
    console.log(e);
    yield put({type: FAILURE_SIGNUP_REQUEST});
  }
}

export function reducer(state: InitialStateProps, action: any) {
  const copyState = Object.assign({}, state);
  switch (action.type) {
    case REQUEST_SIGNUP_REQUEST:
      copyState.profile.email = '';
      copyState.profile.loading = true;
      copyState.profile.isLoggedIn = false;
      return copyState;
    case SUCCESS_SIGNUP_REQUEST:
      copyState.profile.isLoggedIn = true;
      copyState.profile.loading = false;
      copyState.profile.email = action.email;
      return copyState;
    case FAILURE_SIGNUP_REQUEST:
      copyState.profile.email = '';
      copyState.profile.loading = false;
      copyState.profile.isLoggedIn = false;
      return copyState;
    default:
      return copyState;
  }
}
