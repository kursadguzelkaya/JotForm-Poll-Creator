import '../styles/App.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginContainer from '../containers/LoginContainer';
import HeaderContainer from '../containers/HeaderContainer';
import PollCreateContainer from '../containers/PollCreateContainer';
import MyPollsContainer from '../containers/MyPollsContainer';

const App = ({ initApp }) => {
  useEffect(() => {
    initApp('appText');
  }, [initApp]);

  return (
    <Router>
      <div className="App">
        <HeaderContainer status="authenticated" />
        <Switch>
          <Route path="/myPolls" component={MyPollsContainer} />
          <Route path="/createPoll" component={PollCreateContainer} />
          <Route path="/" exact component={LoginContainer} />
        </Switch>
      </div>
    </Router>
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
