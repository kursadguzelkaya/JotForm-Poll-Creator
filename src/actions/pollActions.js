import {
  GET_POLL_REQUEST,
  INIT_SOCKET,
  SUBMIT_POLL_REQUEST,
  UPDATE_POLL_RESULT,
} from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const submitPoll = value => ({
  type: SUBMIT_POLL_REQUEST,
  payload: value,
});

export const updatePoll = value => ({
  type: UPDATE_POLL_RESULT,
  payload: value,
});

export const getPollRequest = id => ({
  type: GET_POLL_REQUEST,
  payload: id,
});

export const initSocket = () => ({
  type: INIT_SOCKET,
});
