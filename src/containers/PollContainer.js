/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  func,
  instanceOf,
  number,
  string,
} from 'prop-types';
import I from 'immutable';

import Poll from '../components/Poll';
import { getPoll, getStatus } from '../selectors';
import { submitPoll, updatePoll, getPollRequest } from '../actions';
import { getErrors } from '../selectors/errorSelector';

const PollContainer = ({
  id,
  status,
  poll,
  submitPoll,
  updatePoll,
  getPollRequest,
  history,
  errors,
}) => {
  useEffect(() => {
    console.log('PollContainer rendered');
    console.log(id);
    getPollRequest(id);
  }, []);

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
  id: number,
  status: string,
  poll: instanceOf(I.Map).isRequired,
  submitPoll: func,
  updatePoll: func,
  getPollRequest: func,
  history: instanceOf(I.Map).isRequired,
  errors: instanceOf(I.List),
};

PollContainer.defaultProps = {
  id: 0,
  status: '',
  submitPoll: f => f,
  updatePoll: f => f,
  getPollRequest: f => f,
  errors: I.fromJS({}),
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
};

export default connect(mapStateToProps, mapActionsToProps)(PollContainer);
