import I from 'immutable';
import { CLEAR_ERRORS, CREATE_POLL_FAIL, SUBMIT_POLL_FAIL } from '../constants/actionTypes';

const INITIAL_STATE = I.fromJS({
  errors: [],
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_POLL_FAIL:
    case CREATE_POLL_FAIL: {
      return state.set('errors', [I.fromJS({ errorMessage: action.payload })]);
    }
    case CLEAR_ERRORS: {
      return state.set('errors', []);
    }
    default:
      return state;
  }
};
