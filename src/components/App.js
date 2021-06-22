import '../styles/App.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// import Login from './Login';
import MyPollsContainer from '../containers/MyPollsContainer';

const App = ({ appText, initApp }) => {
  useEffect(() => {
    initApp('appText');
  }, [initApp]);

  console.log(appText);

  return (
    <div className="App">
      <Header />
      <MyPollsContainer />
    </div>
  );
};

App.propTypes = {
  appText: PropTypes.string.isRequired,
  initApp: PropTypes.func.isRequired,
};

// App.defaultProps = {
//   appText: '',
//   initApp: f => f,
// };

export default App;
