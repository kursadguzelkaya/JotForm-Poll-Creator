import React from 'react';

import '../styles/Login.css';

const Login = () => {
  console.log('Login');
  return (
    <div className="login">
      <div className="login-btn-container">
        <button type="button" onClick={() => console.log('Login button clicked !')}>Login With JotForm</button>
      </div>
    </div>
  );
};

export default Login;
