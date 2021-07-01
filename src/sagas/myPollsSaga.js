import { takeEvery, call, put } from 'redux-saga/effects';
import I from 'immutable';

import {
  LOG_IN_SUCCESS,
  TAKE_USER_POLLS_FAIL,
  TAKE_USER_POLLS_REQUEST,
  TAKE_USER_POLLS_SUCCESS,
} from '../constants/actionTypes';
import { getFormSubmissions, getQuestionsOfForm, getUserForms } from '../lib/api/unsplashService';

function* takeUserPolls(action) {
  try {
    // Get API Key
    const API_KEY = action.payload;

    // Get user's forms
    const { status, data: { content } } = yield call(getUserForms, API_KEY);

    if (status !== 200) {
      throw Error('Request failed for forms');
    }
    console.log(content);
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
      const { data } = yield call(getQuestionsOfForm, API_KEY, id);
      console.log(data);

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
      newPolls.push(newPoll);
    }

    yield put({
      type: TAKE_USER_POLLS_SUCCESS,
      payload: newPolls,
    });
  } catch (error) {
    console.log(error);
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
