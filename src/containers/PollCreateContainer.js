import { connect } from 'react-redux';

import { createPollRequest } from '../actions';
import { getPolls } from '../selectors';

import PollCreate from '../components/PollCreate';
import { getErrors } from '../selectors/errorSelector';

const mapStateToProps = state => {
  const polls = getPolls(state);
  const errors = getErrors(state);

  return {
    polls,
    errors,
  };
};

const mapActionsToProps = {
  createPollRequest,
};

export default connect(mapStateToProps, mapActionsToProps)(PollCreate);
