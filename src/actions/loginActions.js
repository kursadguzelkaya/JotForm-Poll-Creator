import { LOG_IN_REQUEST } from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const logInRequest = history => ({
  type: LOG_IN_REQUEST,
  payload: history,
});
