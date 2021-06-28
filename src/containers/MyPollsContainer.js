import { connect } from 'react-redux';

import MyPolls from '../components/MyPolls';
import { getPolls } from '../selectors';
import { createNewPoll } from '../actions';

const mapStateToProps = state => {
  const polls = getPolls(state);

  return {
    polls,
  };
};

const mapActionsToProps = {
  createNewPoll,
};

export default connect(mapStateToProps, mapActionsToProps)(MyPolls);
