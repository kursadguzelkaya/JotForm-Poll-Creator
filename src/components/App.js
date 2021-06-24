import '../styles/App.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import Login from './Login';
// import MyPollsContainer from '../containers/MyPollsContainer';
import HeaderContainer from '../containers/HeaderContainer';
import PollCreate from './PollCreate';

const App = ({ initApp }) => {
  useEffect(() => {
    initApp('appText');
  }, [initApp]);

  return (
    <div className="App">
      <HeaderContainer status="authenticated" />
      <PollCreate />
    </div>
  );
};

App.propTypes = {
  initApp: PropTypes.func.isRequired,
};

// App.defaultProps = {
//   appText: '',
//   initApp: f => f,
// };

export default App;
