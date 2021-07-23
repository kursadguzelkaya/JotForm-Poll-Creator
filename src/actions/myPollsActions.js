import { DELETE_POLL_REQUEST, GET_MY_POLLS } from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const deletePollRequest = pollID => ({
  type: DELETE_POLL_REQUEST,
  payload: pollID,
});

export const getPollsRequest = () => ({
  type: GET_MY_POLLS,
});
