import { createSelector } from 'reselect';

export const getApp = state => state.app;

export const getAppText = createSelector(
  [getApp],
  app => app.get('text', 'no-text'),
);

export const getSocket = createSelector(
  [getApp],
  app => app.get('socket', 'no-text'),
);
