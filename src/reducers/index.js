import { combineReducers } from 'redux';

import app from './appReducer';
import myPolls from './myPollsReducer';

const reducers = {
  app,
  myPolls,
};

export default combineReducers(reducers);
