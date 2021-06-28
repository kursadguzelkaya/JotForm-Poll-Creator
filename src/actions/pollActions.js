import { SUBMIT_POLL_REQUEST } from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const submitPoll = value => ({
  type: SUBMIT_POLL_REQUEST,
  payload: value,
});
