import { call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import { postData } from '../api/httpClient';
import { withApiErrorHandling } from './errorHandler';

export function* logout() {
  yield* withApiErrorHandling(function* apiHandlingCallback() {
    yield call(postData, '/logout', null);
  });
}

export function* watchLogout() {
  yield takeEvery(actionTypes.LOGOUT, logout);
}
