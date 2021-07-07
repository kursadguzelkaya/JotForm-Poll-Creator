import React from 'react';
import { string, func } from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

const Header = ({ status, logOut }) => {
  console.log('Header');
  return (
    <div className="header">
      <div className="app-info">
        <img src="https://www.jotform.com/tr/resources/assets/logo/jotform-icon-white-560x560.jpg" width="50px" height="50px" alt="app-icon" />
        <h1 className="none-mobile-1000">JotForm Polls</h1>
      </div>
      { status === 'authenticated' ? (
        <div className="authenticated">
          <div className="nav-container">
            <div className="navigation">
              <Link to="/myPolls">
                <p className="nav-link" href="/">My Polls</p>
              </Link>
            </div>
          </div>
          <div className="logout">
            <Link to="/">
              <button className="btn logout-btn" type="button" onClick={logOut}>
                <i className="fas fa-sign-out-alt icon" />
                Sign Out
              </button>
            </Link>
          </div>
        </div>
      ) : null }
    </div>
  );
};

Header.propTypes = {
  status: string,
  logOut: func.isRequired,
};

Header.defaultProps = {
  status: 'not-authenticated',
};

export default Header;
