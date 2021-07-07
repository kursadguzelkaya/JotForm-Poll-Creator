import I from 'immutable';
import { INIT_SOCKET } from '../constants/actionTypes';

const INITIAL_STATE = I.fromJS({
  text: '',
  socket: {},
  socketStatus: '',
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_SOCKET: {
      console.log(action.payload);
      if (state.get('socketStatus') !== 'connected' && action.payload) {
        console.log(state.get('socketStatus'));
        return state.set('socket', action.payload).set('socketStatus', 'connected');
      }
      return state;
    }
    default:
      return state;
  }
};
