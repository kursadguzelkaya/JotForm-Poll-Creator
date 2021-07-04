import { connect } from 'react-redux';

import Poll from '../components/Poll';
import { getPoll } from '../selectors';
import { submitPoll, updatePoll } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const poll = getPoll(state, ownProps.match.params.id);
  return {
    poll,
  };
};

const mapActionsToProps = {
  submitPoll,
  updatePoll,
};

export default connect(mapStateToProps, mapActionsToProps)(Poll);
