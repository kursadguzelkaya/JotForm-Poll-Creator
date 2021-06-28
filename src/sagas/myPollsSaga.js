import { takeEvery } from 'redux-saga/effects';
import { CREATE_NEW_POLL } from '../constants/actionTypes';

function* createNewPoll() {
  // eslint-disable-next-line no-console
  console.log('createNewPoll saga called');
  yield;
}

const myPollsSagas = [
  takeEvery(CREATE_NEW_POLL, createNewPoll),
];

export default myPollsSagas;
