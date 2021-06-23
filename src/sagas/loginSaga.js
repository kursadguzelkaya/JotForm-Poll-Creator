import { takeEvery } from 'redux-saga/effects';
import { LOG_IN } from '../constants/actionTypes';

function* logIn() {
  // eslint-disable-next-line no-console
  console.log('logIn saga called');
  yield;
}

const loginSagas = [
  takeEvery(LOG_IN, logIn),
];

export default loginSagas;
