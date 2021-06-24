import { connect } from 'react-redux';

import { addNewPoll } from '../actions';
import { getPolls } from '../selectors';

import PollCreate from '../components/PollCreate';

const mapStateToProps = state => {
  const polls = getPolls(state);

  return {
    polls,
  };
};

const mapActionsToProps = {
  addNewPoll,
};

export default connect(mapStateToProps, mapActionsToProps)(PollCreate);
