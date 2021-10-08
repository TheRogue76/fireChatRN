import {call, put} from 'redux-saga/effects';

import {initialState} from '@store/initialState';
import {apis} from '@config';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const REQUEST_LOGIN_REQUESTED = 'REQUEST_LOGIN_REQUESTED';
export const REQUEST_LOGIN_SUCCESSFUL = 'REQUEST_LOGIN_SUCCESSFUL';
export const REQUEST_LOGIN_FAILURE = 'REQUEST_LOGIN_FAILURE';

export interface PayLoad {
  email: string;
  password: string;
}

interface Result {
  response: FirebaseAuthTypes.UserCredential;
  error: any;
}

interface Action {
  type:
    | typeof REQUEST_LOGIN_REQUESTED
    | typeof REQUEST_LOGIN_SUCCESSFUL
    | typeof REQUEST_LOGIN_FAILURE;
  data?: FirebaseAuthTypes.UserCredential;
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
    const {response, error}: Result = yield call(apis.loginUser, {
      email: loginPayload.email,
      password: loginPayload.password,
    });
    if (response) {
      yield put({type: REQUEST_LOGIN_SUCCESSFUL, email: response});
    } else if (error) {
      yield put({type: REQUEST_LOGIN_FAILURE});
    } else {
      yield put({type: REQUEST_LOGIN_FAILURE});
    }
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
      copyState.profile.email = action.data.user.email;
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
