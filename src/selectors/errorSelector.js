import { createSelector } from 'reselect';

export const getError = state => state.error;

export const getErrors = createSelector(
  [getError],
  error => error.get('errors', 'no-text'),
);
