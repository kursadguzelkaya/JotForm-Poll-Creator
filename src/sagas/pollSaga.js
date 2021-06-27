import { takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { UPDATE_POLL_RESULT } from '../constants/actionTypes';

function* submitRequest() {
  console.log('submitted');
  yield put(push('/result/1'));
}

const pollSagas = [
  takeEvery(UPDATE_POLL_RESULT, submitRequest),
];

export default pollSagas;
