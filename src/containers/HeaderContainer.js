import { connect } from 'react-redux';

import { logOut } from '../actions';
import Header from '../components/Header';

// const mapStateToProps = state => {
//   const polls = getPolls(state);

//   return {
//     polls,
//   };
// };

const mapActionsToProps = {
  logOut,
};

export default connect(null, mapActionsToProps)(Header);
