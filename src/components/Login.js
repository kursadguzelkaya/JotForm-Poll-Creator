import React from 'react';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/Login.css';

const Login = ({ logIn }) => {
  console.log('Login');
  return (
    <div className="login">
      <div className="login-btn-container">
        <Link to="/myPolls">
          <button type="button" onClick={logIn}>Login With JotForm</button>
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  logIn: func.isRequired,
};

export default Login;
