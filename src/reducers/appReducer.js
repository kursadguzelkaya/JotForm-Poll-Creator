import I from 'immutable';
import { INIT_SOCKET } from '../constants/actionTypes';

const INITIAL_STATE = I.fromJS({
  text: '',
  socket: {},
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_SOCKET: {
      return state.set('socket', action.payload);
    }
    default:
      return state;
  }
};
