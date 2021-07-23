import I from 'immutable';

import { LOG_IN_SUCCESS, LOG_OUT } from '../constants/actionTypes';

const INITIAL_STATE = I.fromJS({
  status: localStorage.getItem('key') ? 'authenticated' : 'not-authenticated',
  key: localStorage.getItem('key'),
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS: {
      localStorage.setItem('key', action.payload);
      return state.set('status', 'authenticated').set('key', action.payload);
    }
    case LOG_OUT: {
      localStorage.removeItem('key');
      return state.set('status', 'not-authenticated').set('key', null);
    }
    default:
      return state;
  }
};
