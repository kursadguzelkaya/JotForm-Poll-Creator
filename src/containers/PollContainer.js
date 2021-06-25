import { connect } from 'react-redux';
// import { useParams } from 'react-router';

import Poll from '../components/Poll';
import { getPoll } from '../selectors';
// import { createNewPoll, openDetailsModel } from '../actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.id);
  const poll = getPoll(state, 1); // TODO: change 1 to id
  console.log(poll);
  return {
    poll,
  };
};

// const mapActionsToProps = {
//   createNewPoll,
//   openDetailsModel,
// };

export default connect(mapStateToProps, null)(Poll);
