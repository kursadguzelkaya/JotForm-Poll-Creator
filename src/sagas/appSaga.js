import { put, takeEvery, take } from 'redux-saga/effects';
import { io } from 'socket.io-client';
import { eventChannel } from 'redux-saga';

import { INIT_APP, INIT_SOCKET, UPDATE_POLL_RESULT } from '../constants/actionTypes';

function subscribeToSocket(socket) {
  return eventChannel(emit => {
    const updatePollResults = data => {
      console.log(data);
      emit({ type: UPDATE_POLL_RESULT, payload: { selected: data.selected, id: data.id } });
    };
    console.log('heree');
    socket.on('update-result', updatePollResults);

    return () => {};
  });
}

function* initApp() {
  // eslint-disable-next-line no-console
  window.JF.initialize({ accessType: 'full', appName: 'JotForm Polls' });
  console.log('initApp saga called');

  // Create socket
  const socket = io('http://localhost:4000');
  console.log(socket);

  // Save socket to store
  yield put({ type: INIT_SOCKET, payload: socket });

  const channelToSubscribe = subscribeToSocket(socket);

  while (true) {
    const channelledAction = yield take(channelToSubscribe);
    yield put(channelledAction);
  }
}

const appSagas = [
  takeEvery(INIT_APP, initApp),
];

export default appSagas;
