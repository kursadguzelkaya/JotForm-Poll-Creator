/* eslint-disable prefer-arrow-callback */
import { takeEvery, call, put } from 'redux-saga/effects';
import { LOG_IN_FAIL, LOG_IN_REQUEST, LOG_IN_SUCCESS } from '../constants/actionTypes';

function* logInSuccess({ payload }) {
  console.log('put called');
  yield put({ type: LOG_IN_SUCCESS, payload });
}

function* logInFail({ payload }) {
  yield put({ type: LOG_IN_FAIL, payload });
}

function* logIn({ payload: { history } }) {
  console.log('logIn saga called');
  try {
    yield window.JF.login(
      function success() {
        console.log('Logged in successfully');
        history.push('/myPolls');
        call(logInSuccess, history);
      },

      function error() {
        console.log('Could not authorize user');
        call(logInFail, history);
      },
    );
  } catch (error) {
    console.log('Eror catched!');
  }
}

const loginSagas = [
  takeEvery(LOG_IN_REQUEST, logIn),
];

export default loginSagas;
