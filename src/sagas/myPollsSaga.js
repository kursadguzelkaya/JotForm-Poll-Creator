import { takeEvery, call, put } from 'redux-saga/effects';
import I from 'immutable';

import {
  LOG_IN_SUCCESS,
  TAKE_USER_POLLS_FAIL,
  TAKE_USER_POLLS_REQUEST,
  TAKE_USER_POLLS_SUCCESS,
} from '../constants/actionTypes';
import { getQuestionsOfForm, getUserForms } from '../lib/api/unsplashService';

function* takeUserPolls(action) {
  console.log('take user polls');

  try {
    // Get user's forms
    const { status, data: { content } } = yield call(getUserForms, action.payload);

    if (status !== 200) {
      throw Error('Request failed for forms');
    }

    // Extract polls from forms
    const polls = [];
    content.map(form => (form.title.substring(0, 10) === '__JFPoll__' ? polls.push(form) : null));
    console.log(polls);

    // Get questions for each form
    const newPolls = [];
    for (let i = 0; i < polls.length; i += 1) {
      const {
        id,
        // eslint-disable-next-line camelcase
        created_at,
        title,
        count,
      } = polls[i];
      const pollName = title.substring(11, title.length - 1);

      // Get questions
      const { data } = yield call(getQuestionsOfForm, action.payload, id);

      // Create new poll object from form
      const newPoll = I.fromJS({
        id,
        pollName,
        date: created_at.substring(0, 11),
        votes: count,
        status: 'finished', // TODO: Update status
        question: {
          questionText: data.content['3'].text,
          options: data.content['3'].options.split('|').map(text => ({ optionText: text, votes: 0 })), // TODO: Update votes
        },
      });
      newPolls.push(newPoll);
    }

    yield put({
      type: TAKE_USER_POLLS_SUCCESS,
      payload: newPolls,
    });
  } catch (error) {
    yield put({
      type: TAKE_USER_POLLS_FAIL,
      payload: error.message,
    });
  }
}

function* pollRequest(action) {
  yield put({
    type: TAKE_USER_POLLS_REQUEST,
    payload: action.payload,
  });
}

const myPollsSagas = [
  takeEvery(LOG_IN_SUCCESS, pollRequest),
  takeEvery(TAKE_USER_POLLS_REQUEST, takeUserPolls),
];

export default myPollsSagas;
