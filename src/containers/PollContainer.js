import { connect } from 'react-redux';
// import { useParams } from 'react-router';

import Poll from '../components/Poll';
import { getPoll } from '../selectors';
import { submitPoll } from '../actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.id);
  const poll = getPoll(state, ownProps.match.params.id);
  console.log(poll);
  return {
    poll,
  };
};

const mapActionsToProps = {
  submitPoll,
};

export default connect(mapStateToProps, mapActionsToProps)(Poll);
