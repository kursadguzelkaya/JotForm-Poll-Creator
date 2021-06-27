import { ADD_NEW_POLL } from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const addNewPoll = poll => ({
  type: ADD_NEW_POLL,
  payload: poll,
});
