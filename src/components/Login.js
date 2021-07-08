import React from 'react';
import { func, object } from 'prop-types';
import { ReactComponent as LoginIcon } from '../assets/icons/sign-in-alt-solid.svg';

import '../styles/Login.css';

const Login = ({ logInRequest, history }) => {
  return (
    <div className="login">
      <div className="info">
        <h1> Easy, Quick, Simple</h1>
        <h2> Start creating polls with JotForm Polls</h2>
      </div>
      <div className="login-btn-container">
        <button type="button" onClick={() => logInRequest(history)} className="btn">
          <LoginIcon className="icon" />
          Login With JotForm
        </button>
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
