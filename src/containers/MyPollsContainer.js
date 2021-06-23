import { connect } from 'react-redux';

import MyPolls from '../components/MyPolls';
import { getPolls } from '../selectors';
import { createNewPoll, openDetailsModel } from '../actions';

const mapStateToProps = state => {
  const polls = getPolls(state);

  return {
    polls,
  };
};

const mapActionsToProps = {
  createNewPoll,
  openDetailsModel,
};

export default connect(mapStateToProps, mapActionsToProps)(MyPolls);
