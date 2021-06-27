import { connect } from 'react-redux';
// import { useParams } from 'react-router';

import Result from '../components/Result';
import { getPoll } from '../selectors';
// import { createNewPoll, openDetailsModel } from '../actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.id);
  const poll = getPoll(state, parseInt(ownProps.match.params.id, 10));
  console.log(poll);
  return {
    poll,
  };
};

// const mapActionsToProps = {
//   createNewPoll,
//   openDetailsModel,
// };

export default connect(mapStateToProps, null)(Result);
