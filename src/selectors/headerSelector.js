import { createSelector } from 'reselect';

export const getLogin = state => state.login;

export const getLoginStatus = createSelector(
  [getLogin],
  login => login.get('status', 'no-status'),
);
