import { connect } from 'react-redux';

import SharePoll from '../components/SharePoll';
import { getPoll } from '../selectors';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const poll = getPoll(state, parseInt(id, 10));
  const pollName = poll.get('pollName');
  return {
    pollName,
    id,
  };
};

export default connect(mapStateToProps, null)(SharePoll);
