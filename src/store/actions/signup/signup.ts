import {call, put} from 'redux-saga/effects';

import {InitialStateProps} from '@src/interfaces';
import {apis} from '@config';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const REQUEST_SIGNUP_REQUEST = 'REQUEST_SIGNUP_REQUEST';
export const SUCCESS_SIGNUP_REQUEST = 'SUCCESS_SIGNUP_REQUEST';
export const FAILURE_SIGNUP_REQUEST = 'FAILURE_SIGNUP_REQUEST';

interface Props {
  email: string;
  password: string;
}

interface Result {
  response: FirebaseAuthTypes.UserCredential;
  error: any;
}

interface Action {
  type:
    | typeof REQUEST_SIGNUP_REQUEST
    | typeof SUCCESS_SIGNUP_REQUEST
    | typeof FAILURE_SIGNUP_REQUEST;
  data?: FirebaseAuthTypes.UserCredential;
}

export function signup(payload: Props) {
  return {
    type: REQUEST_SIGNUP_REQUEST,
    email: payload.email,
    password: payload.password,
  };
}

export function* fetchSignup(signupPayload: ReturnType<typeof signup>) {
  try {
    const {response, error}: Result = yield call(apis.createUser, {
      email: signupPayload.email,
      password: signupPayload.password,
    });
    if (response) {
      yield put({type: SUCCESS_SIGNUP_REQUEST, email: response});
    } else if (error) {
      yield put({type: FAILURE_SIGNUP_REQUEST});
    } else {
      yield put({type: FAILURE_SIGNUP_REQUEST});
    }
  } catch (e) {
    yield put({type: FAILURE_SIGNUP_REQUEST});
  }
}

export function reducer(state: InitialStateProps, action: Action) {
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
      copyState.profile.email = action.data.user.email;
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
