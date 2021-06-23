import React from 'react';
import { func } from 'prop-types';

import '../styles/Login.css';

const Login = ({ logIn }) => {
  console.log('Login');
  return (
    <div className="login">
      <div className="login-btn-container">
        <button type="button" onClick={logIn}>Login With JotForm</button>
      </div>
    </div>
  );
};

Login.propTypes = {
  logIn: func.isRequired,
};

export default Login;
