import I from 'immutable';

import { LOG_IN, LOG_OUT } from '../constants/actionTypes';

const INITIAL_STATE = I.fromJS({
  status: 'not-authenticated',
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN: {
      return state.set('status', 'authenticated');
    }
    case LOG_OUT: {
      return state.set('status', 'not-authenticated');
    }
    default:
      return state;
  }
};
