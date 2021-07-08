import '../styles/App.css';
import React, { useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MyPollsContainer = lazy(() => import(/* webpackChunkName: "MyPolls" */ '../containers/MyPollsContainer'));
const PollCreateContainer = lazy(() => import(/* webpackChunkName: "PollCreate" */ '../containers/PollCreateContainer'));
const LoginContainer = lazy(() => import(/* webpackChunkName: "Login" */ '../containers/LoginContainer'));
const PollContainer = lazy(() => import(/* webpackChunkName: "Poll" */ '../containers/PollContainer'));
const HeaderContainer = lazy(() => import(/* webpackChunkName: "Header" */ '../containers/HeaderContainer'));
const ResultContainer = lazy(() => import(/* webpackChunkName: "Result" */ '../containers/ResultContainer'));
const SharePollContainer = lazy(() => import(/* webpackChunkName: "SharePoll" */ '../containers/SharePollContainer'));
const Auth = lazy(() => import(/* webpackChunkName: "Auth" */ './Auth'));

const App = ({ initApp }) => {
  useEffect(() => {
    initApp('appText');
  }, [initApp]);

  return (
    <Router>
      <div className="App">
        <Suspense fallback={null}>
          <HeaderContainer />
          <Switch>
            <Route path="/myPolls" component={MyPollsContainer} />
            <Route path="/createPoll" component={PollCreateContainer} />
            <Route path="/" exact component={LoginContainer} />
            <Route path="/poll/:id" component={PollContainer} />
            <Route path="/result/:id" component={ResultContainer} />
            <Route path="/share/:id" component={SharePollContainer} />
            <Route path="/authRedirect" component={Auth} />
          </Switch>
        </Suspense>
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
