import React from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Authentication from '../components/Account/Authentication';
import { loginUser, registerUser } from '../actions/user.actions';

const AuthenticateUser = ({ dispatch }) => {
  const login = e => {
    e.preventDefault();
    dispatch(loginUser(1));
  };

  const register = e => {
    e.preventDefault();
    dispatch(registerUser(2));
  };

  return (
    <React.Fragment>
      User ID:
      <Authentication onLoginSubmit={login} onRegisterSubmit={register} />
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  // eslint-disable-next-line no-console
  console.log(state);

  return {};
}

AuthenticateUser.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(AuthenticateUser);
