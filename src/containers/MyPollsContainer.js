import { connect } from 'react-redux';

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

export default connect(mapStateToProps, null)(MyPolls);
