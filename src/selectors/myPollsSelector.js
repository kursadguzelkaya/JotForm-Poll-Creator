import { createSelector } from 'reselect';

export const getMyPolls = state => state.myPolls;

export const getPolls = createSelector(
  [getMyPolls],
  myPolls => myPolls.get('polls', []),
);
