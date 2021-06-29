/* eslint-disable prefer-arrow-callback */
import {
  call,
  delay,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { LOG_IN_FAIL, LOG_IN_REQUEST } from '../constants/actionTypes';

// function* logInSuccess({ payload }) {
//   console.log('put called');
//   yield put({ type: LOG_IN_SUCCESS, payload });
// }

function* logInFail({ payload }) {
  yield put({ type: LOG_IN_FAIL, payload });
}

function* logIn({ payload: history }) {
  yield console.log('logIn saga called', history);
  try {
    window.JF.login(
      function success() {
        console.log('Logged in successfully');
        history.push('/authRedirect');
        // call(logInSuccess, history);
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

function* initAuth({ payload: history }) {
  try {
    console.log('authed');
    yield delay(2000);
    history.push('/myPolls');
  } catch (error) {
    yield put({ type: 'auth fail', payload: error.message });
  }
}

const loginSagas = [
  takeEvery(LOG_IN_REQUEST, logIn),
  takeEvery('init auth', initAuth),
];

export default loginSagas;
