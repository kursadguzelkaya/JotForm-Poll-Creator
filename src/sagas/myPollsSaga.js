import { takeEvery } from 'redux-saga/effects';
import { CREATE_NEW_POLL, OPEN_DETAILS_MODEL } from '../constants/actionTypes';

function* openDetailsModel() {
  // eslint-disable-next-line no-console
  console.log('openDetailsModel saga called');
  yield;
}

function* createNewPoll() {
  // eslint-disable-next-line no-console
  console.log('createNewPoll saga called');
  yield;
}

const myPollsSagas = [
  takeEvery(OPEN_DETAILS_MODEL, openDetailsModel),
  takeEvery(CREATE_NEW_POLL, createNewPoll),
];

export default myPollsSagas;
