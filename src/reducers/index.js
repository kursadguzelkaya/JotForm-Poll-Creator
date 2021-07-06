import { combineReducers } from 'redux';

import app from './appReducer';
import myPolls from './myPollsReducer';
import login from './loginReducer';
import error from './errorReducer';

const reducers = {
  app,
  myPolls,
  login,
  error,
};

export default combineReducers(reducers);
