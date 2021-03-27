import {all, takeLatest} from 'redux-saga/effects';

import {REQUEST_LOGIN_REQUESTED, fetchLogin} from './actions/login/login';

export function* saga() {
  yield all([takeLatest(REQUEST_LOGIN_REQUESTED, fetchLogin)]);
}
