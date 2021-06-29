import { CREATE_POLL_REQUEST } from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const createPollRequest = poll => ({
  type: CREATE_POLL_REQUEST,
  payload: poll,
});
