import '../styles/App.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const App = ({ appText, initApp }) => {
  useEffect(() => {
    initApp('appText');
  }, [initApp]);

  console.log(appText);

  return (
    <div className="App">
      <Header />
      App
    </div>
  );
};

App.propTypes = {
  appText: PropTypes.string.isRequired,
  initApp: PropTypes.func.isRequired,
};

App.defaulProps = {
  appText: '',
  initApp: f => f,
};

export default App;
