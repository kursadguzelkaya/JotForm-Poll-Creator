import { put, takeEvery } from 'redux-saga/effects';

import {
  SUBMIT_POLL_FAIL, SUBMIT_POLL_REQUEST, SUBMIT_POLL_SUCCESS, UPDATE_POLL_RESULT,
} from '../constants/actionTypes';

function* submitRequest({ payload: { selected, id, callback } }) {
  console.log('submitted');
  if (selected !== '') {
    yield put({ type: SUBMIT_POLL_SUCCESS, payload: { selected, id } });
    callback();
  } else {
    yield put({ type: SUBMIT_POLL_FAIL, payload: { selected, id } });
  }
  yield;
}

function* updateResults({ payload }) {
  yield put({ type: UPDATE_POLL_RESULT, payload });
}

const pollSagas = [
  takeEvery(SUBMIT_POLL_REQUEST, submitRequest),
  takeEvery(SUBMIT_POLL_SUCCESS, updateResults),
];

export default pollSagas;
