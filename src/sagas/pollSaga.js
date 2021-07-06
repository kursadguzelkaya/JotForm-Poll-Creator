import {
  call,
  put,
  delay,
  takeEvery,
  select,
  take,
} from 'redux-saga/effects';
import I from 'immutable';
import { eventChannel } from 'redux-saga';

import {
  ADD_SUBMISSION_REQUEST,
  CLEAR_ERRORS,
  GET_POLL_FAIL,
  GET_POLL_REQUEST,
  GET_POLL_SUCCESS,
  SUBMIT_POLL_FAIL,
  SUBMIT_POLL_REQUEST,
  SUBMIT_POLL_SUCCESS,
  UPDATE_POLL_RESULT,
  UPDATE_RESULT_SOCKET,
} from '../constants/actionTypes';
import {
  addSubmission,
  getForm,
  getFormSubmissions,
  getQuestionsOfForm,
} from '../lib/api/unsplashService';
import { API_KEY } from '../constants/adminKey';
import { getSocket } from '../selectors';

function subscribeToSocket(socket, id) {
  return eventChannel(emit => {
    const updatePollResults = data => {
      console.log(data);
      emit({ type: UPDATE_POLL_RESULT, payload: { selected: data, id } });
    };
    console.log('heree');
    socket.on('update-result', updatePollResults);

    return () => {};
  });
}

function* updateResultSocket({ payload: { selected, id } }) {
  console.log('socket is updtatedd');
  // Get socket from store
  const socket = yield select(getSocket);

  // Create submit-poll event on socket
  socket.emit('submit-poll', selected);

  const channelToSubscribe = subscribeToSocket(socket, id);

  while (true) {
    const channelledAction = yield take(channelToSubscribe);
    yield put(channelledAction);
  }
}

function* submitRequest({ payload: { selected, id, callback } }) {
  console.log('submitted');
  if (selected !== '') {
    // Update poll result on redux store
    yield put({ type: SUBMIT_POLL_SUCCESS, payload: { selected, id } });

    // Add submisson to form
    yield put({ type: ADD_SUBMISSION_REQUEST, payload: { selected, id } });

    // Update socket
    yield put({ type: UPDATE_RESULT_SOCKET, payload: { selected, id } });

    // Route to result page
    callback();
  } else {
    // Create error
    yield put({ type: SUBMIT_POLL_FAIL, payload: 'Please choose an option' });

    // Clear errors
    yield delay(2000);
    yield put({ type: CLEAR_ERRORS });
  }
}

function* updateResults({ payload }) {
  yield put({ type: UPDATE_POLL_RESULT, payload });
}

function* addSubmisson({ payload: { selected, id } }) {
  // const API_KEY = yield select(getAPIKey);
  // const res = yield call(getQuestionsOfForm, API_KEY, id);
  const submission = {
    q3_questionId: selected,
  };
  const res = yield call(addSubmission, id, submission);
  console.log(res);
}

function* getPollRequest({ payload }) {
  try {
    const { data: { content } } = yield call(getForm, API_KEY, payload);

    const {
      id,
      // eslint-disable-next-line camelcase
      created_at,
      title,
      count,
    } = content;
    const pollName = title.substring(11, title.length - 1);

    // Get questions
    const { data } = yield call(getQuestionsOfForm, API_KEY, id);

    // Get submissons
    const res = yield call(getFormSubmissions, API_KEY, id);

    // Update votes with submissons
    const options = data.content['3'].options.split('|').map(option => {
      let votes = 0;
      // eslint-disable-next-line no-return-assign
      res.data.content.map(submisson => (submisson.answers['3'].answer === option ? votes += 1 : null));
      return ({ optionText: option, votes });
    });

    // Create new poll object from form
    const newPoll = I.fromJS({
      id,
      pollName,
      date: created_at.substring(0, 11),
      votes: count,
      status: 'finished', // TODO: Update status
      question: {
        questionText: data.content['3'].text,
        options,
      },
    });

    yield put({ type: GET_POLL_SUCCESS, payload: newPoll });

    console.log(newPoll);
  } catch (error) {
    yield put({ type: GET_POLL_FAIL, payload: error.message });
    console.log(error);
  }
}

const pollSagas = [
  takeEvery(SUBMIT_POLL_REQUEST, submitRequest),
  takeEvery(SUBMIT_POLL_SUCCESS, updateResults),
  takeEvery(ADD_SUBMISSION_REQUEST, addSubmisson),
  takeEvery(GET_POLL_REQUEST, getPollRequest),
  takeEvery(UPDATE_RESULT_SOCKET, updateResultSocket),
];

export default pollSagas;
