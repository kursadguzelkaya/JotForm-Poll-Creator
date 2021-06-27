import { UPDATE_POLL_RESULT } from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const updatePollResult = value => ({
  type: UPDATE_POLL_RESULT,
  payload: value,
});
