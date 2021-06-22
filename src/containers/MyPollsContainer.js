import { connect } from 'react-redux';
import MyPolls from '../components/MyPolls';

import { getPolls } from '../selectors';

const mapStateToProps = state => {
  const polls = getPolls(state);

  return {
    polls,
  };
};

// const mapActionsToProps = {
//   initApp,
// };

export default connect(mapStateToProps, null)(MyPolls);
