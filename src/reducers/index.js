import { combineReducers } from 'redux';

import app from './appReducer';
import myPolls from './myPollsReducer';
import login from './loginReducer';

const reducers = {
  app,
  myPolls,
  login,
};

export default combineReducers(reducers);
