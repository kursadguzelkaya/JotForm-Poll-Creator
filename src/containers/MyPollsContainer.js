import { connect } from 'react-redux';

import { deletePollRequest } from '../actions';
import MyPolls from '../components/MyPolls';
import { getPolls, getStatus } from '../selectors';

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
};

export default connect(mapStateToProps, mapActionsToProps)(MyPolls);
