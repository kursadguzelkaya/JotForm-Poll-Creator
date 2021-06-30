/* eslint-disable prefer-arrow-callback */
import {
  delay,
  put,
  takeEvery,
} from 'redux-saga/effects';
import {
  LOG_IN_FAIL,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from '../constants/actionTypes';

function* logInRequest({ payload: history }) {
  yield console.log('logIn saga called', history);
  try {
    window.JF.login(
      function success() {
        console.log('Logged in successfully');
        history.push('/authRedirect');
      },

      function error() {
        console.log('Could not authorize user');
      },
    );
  } catch (error) {
    console.log('Eror catched!');
  }
}

function* initAuth({ payload: history }) {
  try {
    yield delay(2000);
    const key = window.JF.getAPIKey();
    history.push('/myPolls');
    yield put({ type: LOG_IN_SUCCESS, payload: key });
  } catch (error) {
    yield put({ type: LOG_IN_FAIL, payload: error.message });
  }
}

const loginSagas = [
  takeEvery(LOG_IN_REQUEST, logInRequest),
  takeEvery('init auth', initAuth),
];

export default loginSagas;
