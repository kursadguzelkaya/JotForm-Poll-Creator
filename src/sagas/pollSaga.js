import {
  call,
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';

import {
  ADD_SUBMISSION_REQUEST,
  SUBMIT_POLL_FAIL, SUBMIT_POLL_REQUEST, SUBMIT_POLL_SUCCESS, UPDATE_POLL_RESULT,
} from '../constants/actionTypes';
import { getQuestionsOfForm } from '../lib/api/unsplashService';
import { getAPIKey } from '../selectors';

function* submitRequest({ payload: { selected, id, callback } }) {
  console.log('submitted');
  if (selected !== '') {
    // Update poll result on redux store
    yield put({ type: SUBMIT_POLL_SUCCESS, payload: { selected, id } });

    // Add submisson to form
    yield put({ type: ADD_SUBMISSION_REQUEST, payload: { selected, id } });

    // Route to result page
    callback();
  } else {
    yield put({ type: SUBMIT_POLL_FAIL, payload: { selected, id } });
  }
}

function* updateResults({ payload }) {
  yield put({ type: UPDATE_POLL_RESULT, payload });
}

function* addSubmisson({ payload: { id } }) {
  const API_KEY = yield select(getAPIKey);
  const res = yield call(getQuestionsOfForm, API_KEY, id);
  console.log(res);
}

const pollSagas = [
  takeEvery(SUBMIT_POLL_REQUEST, submitRequest),
  takeEvery(SUBMIT_POLL_SUCCESS, updateResults),
  takeEvery(ADD_SUBMISSION_REQUEST, addSubmisson),
];

export default pollSagas;
