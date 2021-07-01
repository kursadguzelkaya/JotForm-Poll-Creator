import { connect } from 'react-redux';
// import { useParams } from 'react-router';

import Result from '../components/Result';
import { getPoll } from '../selectors';
// import { createNewPoll, openDetailsModel } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const poll = getPoll(state, ownProps.match.params.id);
  return {
    poll,
  };
};

// const mapActionsToProps = {
//   createNewPoll,
//   openDetailsModel,
// };

export default connect(mapStateToProps, null)(Result);
