import '../styles/App.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const App = ({ appText, initApp }) => {
  useEffect(() => {
    initApp('appText');
  }, [initApp]);

  return (
    <div className="App">
      App
      {appText}
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
