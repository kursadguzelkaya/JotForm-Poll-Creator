import { all } from 'redux-saga/effects';
import appSaga from './appSaga';
import headerSagas from './headerSaga';
import loginSagas from './loginSaga';
import myPollsSagas from './myPollsSaga';

export default function* rootSaga() {
  yield all([
    ...appSaga,
    ...headerSagas,
    ...loginSagas,
    ...myPollsSagas,
  ]);
}
