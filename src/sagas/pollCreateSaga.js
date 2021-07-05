import {
  call,
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';

import {
  ADD_NEW_POLL,
  CREATE_POLL_REQUEST,
  CREATE_POLL_SUCCESS,
  CREATE_POLL_FAIL,
} from '../constants/actionTypes';
import { getQuestionsOfForm, postUserForm } from '../lib/api/unsplashService';
import { getAPIKey } from '../selectors';

function* createPollRequest({ payload: { poll, history } }) {
  console.log('submitted');
  if (poll.get('pollName') === '') {
    console.log('Please fill poll name!!');
    yield put({ type: CREATE_POLL_FAIL, payload: poll });
  } else if (poll.getIn(['question', 'questionText']) === '') {
    console.log('Please fill question!!');
    yield put({ type: CREATE_POLL_FAIL, payload: poll });
  } else if (poll.getIn(['question', 'options']).find(option => option.get('optionText') === '')) {
    console.log('Please fill empty options!!');
    yield put({ type: CREATE_POLL_FAIL, payload: poll });
  } else {
    yield put({ type: CREATE_POLL_SUCCESS, payload: { poll, history } });
  }
}

function* addNewPoll({ payload: { poll, history } }) {
  // Get API key
  const API_KEY = yield select(getAPIKey);

  // Convert options correct format ( option 1| option 2 )
  let options = '';
  // eslint-disable-next-line no-return-assign
  poll.getIn(['question', 'options']).map(option => options += `${option.get('optionText')}|`);
  options = options.substring(0, options.length - 1);

  // Create form object
  const formObject = {
    properties: {
      title: `__JFPoll__(${poll.get('pollName')})`,
    },
    questions: {
      1: {
        headerType: 'Large',
        imageAlign: 'Left',
        name: '__jfpoll__jotfformForm',
        order: '1',
        qid: '1',
        text: `__JFPoll__(${poll.get('pollName')})`,
        textAlign: 'Left',
        type: 'control_head',
        verticalTextAlign: 'Middle',
      },
      2: {
        buttonAlign: 'Auto',
        buttonStyle: 'None',
        clear: 'No',
        clearText: 'Clear All Questions',
        encryptIcon: 'No',
        name: 'submit2',
        order: '3',
        print: 'No',
        printText: 'Print',
        qid: '2',
        text: 'Submit',
        type: 'control_button',
      },
      3: {
        type: 'control_radio',
        text: poll.getIn(['question', 'questionText']),
        order: '2',
        name: 'questionId',
        options,
        qid: '3',
      },
    },
  };
  try {
    // Post form
    const { data: { content } } = yield call(postUserForm, API_KEY, formObject);

    // Add poll to redux store
    yield put({ type: ADD_NEW_POLL, payload: poll.set('id', content.id) });

    const { data } = yield call(getQuestionsOfForm, API_KEY, content.id);
    console.log(data);

    // Change route
    history.push(`/share/${content.id}`);
  } catch (error) {
    console.log(error);
  }
}

const pollCreateSagas = [
  takeEvery(CREATE_POLL_REQUEST, createPollRequest),
  takeEvery(CREATE_POLL_SUCCESS, addNewPoll),
];

export default pollCreateSagas;
