import { connect } from 'react-redux';

import { logOut } from '../actions';
import Header from '../components/Header';
import { getLoginStatus } from '../selectors';

const mapStateToProps = state => {
  const status = getLoginStatus(state);

  return {
    status,
  };
};

const mapActionsToProps = {
  logOut,
};

export default connect(mapStateToProps, mapActionsToProps)(Header);
