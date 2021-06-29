import { put, takeEvery } from 'redux-saga/effects';

import {
  ADD_NEW_POLL,
  CREATE_POLL_REQUEST,
  CREATE_POLL_SUCCESS,
  SUBMIT_POLL_FAIL,
} from '../constants/actionTypes';

function* createPollRequest({ payload: { poll, callback } }) {
  console.log('submitted');
  if (poll.get('pollName') === '') {
    console.log('Please fill poll name!!');
    yield put({ type: SUBMIT_POLL_FAIL, payload: poll });
  } else if (poll.getIn(['question', 'questionText']) === '') {
    console.log('Please fill question!!');
    yield put({ type: SUBMIT_POLL_FAIL, payload: poll });
  } else if (poll.getIn(['question', 'options']).find(option => option.get('optionText') === '')) {
    console.log('Please fill empty options!!');
    yield put({ type: SUBMIT_POLL_FAIL, payload: poll });
  } else {
    yield put({ type: ADD_NEW_POLL, payload: poll });
    callback();
  }
  yield;
}

function* addNewPoll({ payload }) {
  yield put({ type: ADD_NEW_POLL, payload });
}

const pollCreateSagas = [
  takeEvery(CREATE_POLL_REQUEST, createPollRequest),
  takeEvery(CREATE_POLL_SUCCESS, addNewPoll),
];

export default pollCreateSagas;
