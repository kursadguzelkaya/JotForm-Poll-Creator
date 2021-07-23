/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  func,
  instanceOf,
  string,
} from 'prop-types';
import I from 'immutable';

import { deletePollRequest, getPollsRequest } from '../actions';
import MyPolls from '../components/MyPolls';
import { getPolls, getStatus } from '../selectors';

const MyPollsContainer = ({
  polls,
  status,
  getPollsRequest,
  deletePollRequest,
}) => {
  useEffect(() => {
    getPollsRequest();
  }, [getPollsRequest]);
  return (
    <div>
      <MyPolls polls={polls} status={status} deletePollRequest={deletePollRequest} />
    </div>
  );
};

MyPollsContainer.propTypes = {
  status: string,
  polls: instanceOf(I.List),
  getPollsRequest: func,
  deletePollRequest: func,
};

MyPollsContainer.defaultProps = {
  status: '',
  polls: I.fromJS({}),
  getPollsRequest: f => f,
  deletePollRequest: f => f,
};

const mapStateToProps = state => {
  const polls = getPolls(state);
  const status = getStatus(state);

  return {
    polls,
    status,
  };
};

const mapActionsToProps = {
  deletePollRequest,
  getPollsRequest,
};

export default connect(mapStateToProps, mapActionsToProps)(MyPollsContainer);
