import { put } from 'redux-saga/effects';
import apiErrorAction from '../actions/apiErrorActions';

export function* withApiErrorHandling(generator) {
  try {
    yield* generator();
    yield put(apiErrorAction({}));
  } catch (error) {
    yield put(apiErrorAction(error));
  }
}
