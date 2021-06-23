import { connect } from 'react-redux';
import Login from '../components/Login';

import { logIn } from '../actions';

// const mapStateToProps = state => {
// };

const mapActionsToProps = {
  logIn,
};

export default connect(null, mapActionsToProps)(Login);
