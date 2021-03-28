import {all, takeLatest} from 'redux-saga/effects';

import {REQUEST_LOGIN_REQUESTED, fetchLogin} from './actions/login/login';
import {REQUEST_SIGNUP_REQUEST, fetchSignup} from './actions/signup/signup';

export function* saga() {
  yield all([
    takeLatest(REQUEST_LOGIN_REQUESTED, fetchLogin),
    takeLatest(REQUEST_SIGNUP_REQUEST, fetchSignup),
  ]);
}
