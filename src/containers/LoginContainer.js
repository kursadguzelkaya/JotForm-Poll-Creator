import { connect } from 'react-redux';
import Login from '../components/Login';

import { logInRequest } from '../actions';

// const mapStateToProps = state => {
// };

const mapActionsToProps = {
  logInRequest,
};

export default connect(null, mapActionsToProps)(Login);
