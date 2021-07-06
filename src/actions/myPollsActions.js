import { DELETE_POLL_REQUEST } from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const deletePollRequest = pollID => ({
  type: DELETE_POLL_REQUEST,
  payload: pollID,
});
