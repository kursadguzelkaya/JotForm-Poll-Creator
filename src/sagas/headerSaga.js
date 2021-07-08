import { takeEvery } from 'redux-saga/effects';
import { LOG_OUT } from '../constants/actionTypes';

function* logOut() {
  // eslint-disable-next-line no-console
  yield;
}

const headerSagas = [
  takeEvery(LOG_OUT, logOut),
];

export default headerSagas;
