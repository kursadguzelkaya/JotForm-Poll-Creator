import { put, takeEvery } from 'redux-saga/effects';
import { io } from 'socket.io-client';

import { INIT_APP, INIT_SOCKET } from '../constants/actionTypes';

function* initApp() {
  // eslint-disable-next-line no-console
  window.JF.initialize({ accessType: 'full', appName: 'JotForm Polls' });
  console.log('initApp saga called');

  // Create socket
  const socket = io('http://localhost:4000');
  console.log(socket);

  // Save socket to store
  yield put({ type: INIT_SOCKET, payload: socket });
}

const appSagas = [
  takeEvery(INIT_APP, initApp),
];

export default appSagas;
