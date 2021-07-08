import React from 'react';
import { string, func } from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/Header.css';
import { ReactComponent as SignoutIcon } from '../assets/icons/sign-out-alt-solid.svg';

const Header = ({ status, logOut }) => {
  return (
    <div className="header">
      <div className="app-info">
        <img src="/img/jf.webp" width="50" height="50" alt="app-icon" />
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
                <SignoutIcon className="icon" />
                <span className="none-mobile-500">Sign Out</span>
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
