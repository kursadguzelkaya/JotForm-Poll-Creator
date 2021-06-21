import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Header.css';

const Header = ({ status }) => {
  console.log('Header');
  return (
    <div className="header">
      <div className="app-info">
        <img src="https://www.jotform.com/tr/resources/assets/logo/jotform-icon-white-560x560.jpg" width="50px" height="50px" alt="app-icon" />
        <h1>JotForm Poll Maker</h1>
      </div>
      { status === 'authenticated' ? (
        <div>
          <div className="navigation">
            <a className="nav-link" href="/">My Polls</a>
            <a className="nav-link" href="/">Settings</a>
          </div>
          <div className="logout">
            <button className="btn logout-btn" type="button" onClick={() => console.log('logout button clicked')}>Sign Out</button>
          </div>
        </div>
      ) : null }
    </div>
  );
};

Header.propTypes = {
  status: PropTypes.string,
};

Header.defaultProps = {
  status: 'not-authenticated',
};

export default Header;
