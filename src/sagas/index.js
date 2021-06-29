import { all } from 'redux-saga/effects';
import appSaga from './appSaga';
import headerSagas from './headerSaga';
import loginSagas from './loginSaga';
import pollCreateSagas from './pollCreateSaga';
import pollSagas from './pollSaga';

export default function* rootSaga() {
  yield all([
    ...appSaga,
    ...headerSagas,
    ...loginSagas,
    ...pollSagas,
    ...pollCreateSagas,
  ]);
}
