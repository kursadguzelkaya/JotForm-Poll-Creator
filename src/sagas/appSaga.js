import { takeEvery } from 'redux-saga/effects';
import { INIT_APP } from '../constants/actionTypes';

function* initApp() {
  // eslint-disable-next-line no-console
  console.log('initApp saga called');
  yield;
}

const appSagas = [
  takeEvery(INIT_APP, initApp),
];

export default appSagas;
