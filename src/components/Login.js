import React from 'react';
import { func, object } from 'prop-types';

import '../styles/Login.css';

const Login = ({ logInRequest, history }) => {
  console.log('Login', history);
  return (
    <div className="login">
      <div className="login-btn-container">
        <button type="button" onClick={() => logInRequest(history)}>Login With JotForm</button>
      </div>
    </div>
  );
};

Login.propTypes = {
  logInRequest: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: object.isRequired,
};

export default Login;
