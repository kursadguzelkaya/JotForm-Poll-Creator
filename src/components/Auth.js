import { func, shape } from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Auth = ({ initAuth: _initAuth, history }) => {
  useEffect(() => _initAuth(history), [_initAuth, history]);
  return <div>redirecting</div>;
};

Auth.propTypes = {
  initAuth: func.isRequired,
  history: shape({}).isRequired,
};

export default connect(
  () => {},
  {
    initAuth: history => ({
      type: 'init auth',
      payload: history,
    }),
  },
)(Auth);
