/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  func,
  instanceOf,
  shape,
  string,
} from 'prop-types';
import I from 'immutable';

import Poll from '../components/Poll';
import { getPoll, getStatus } from '../selectors';
import {
  submitPoll,
  updatePoll,
  getPollRequest,
  initSocket,
} from '../actions';
import { getErrors } from '../selectors/errorSelector';

const PollContainer = ({
  id,
  status,
  poll,
  submitPoll,
  updatePoll,
  getPollRequest,
  initSocket,
  history,
  errors,
}) => {
  useEffect(() => {
    getPollRequest(id);
    initSocket();
  }, [getPollRequest, id, initSocket]);

  return (
    <div>
      {status !== 'ready' ? (<h1>loading...</h1>) : (
        <Poll
          poll={poll}
          submitPoll={submitPoll}
          updatePoll={updatePoll}
          history={history}
          errors={errors}
        />
      )}
    </div>
  );
};

PollContainer.propTypes = {
  id: string,
  status: string,
  poll: instanceOf(I.Map),
  submitPoll: func,
  updatePoll: func,
  getPollRequest: func,
  initSocket: func,
  history: shape({}),
  errors: instanceOf(I.List),
};

PollContainer.defaultProps = {
  id: '',
  status: '',
  submitPoll: f => f,
  updatePoll: f => f,
  getPollRequest: f => f,
  initSocket: f => f,
  errors: I.fromJS({}),
  poll: I.fromJS({}),
  history: {},
};

const mapStateToProps = (state, ownProps) => {
  const poll = getPoll(state, ownProps.match.params.id);
  const status = getStatus(state);
  const { id } = ownProps.match.params;
  const errors = getErrors(state);
  return {
    poll,
    id,
    status,
    errors,
  };
};

const mapActionsToProps = {
  submitPoll,
  updatePoll,
  getPollRequest,
  initSocket,
};

export default connect(mapStateToProps, mapActionsToProps)(PollContainer);
