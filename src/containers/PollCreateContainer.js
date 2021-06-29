import { connect } from 'react-redux';

import { createPollRequest } from '../actions';
import { getPolls } from '../selectors';

import PollCreate from '../components/PollCreate';

const mapStateToProps = state => {
  const polls = getPolls(state);

  return {
    polls,
  };
};

const mapActionsToProps = {
  createPollRequest,
};

export default connect(mapStateToProps, mapActionsToProps)(PollCreate);
