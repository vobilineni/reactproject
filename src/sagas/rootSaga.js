import {all, fork} from 'redux-saga/effects';
import {watchLogout} from './authSagas';


export default function* rootSaga() {
  yield all([fork(watchLogout)]);
}
