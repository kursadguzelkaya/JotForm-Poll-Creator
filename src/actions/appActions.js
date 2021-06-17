import { INIT_APP } from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const initApp = text => ({
  type: INIT_APP,
  payload: text,
});
