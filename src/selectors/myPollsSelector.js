import { createSelector } from 'reselect';

export const getMyPolls = state => state.myPolls;

export const getPolls = createSelector(
  [getMyPolls],
  myPolls => myPolls.get('polls', []),
);

export const getPoll = (state, id) => getPolls(state).find(poll => poll.get('id') === id);

export const getStatus = createSelector(
  [getMyPolls],
  myPolls => myPolls.get('status', 'error'),
);
