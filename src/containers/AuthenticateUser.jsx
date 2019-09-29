import React from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Authentication from '../components/Account/Authentication';
import { loginUser, registerUser } from '../actions/user.actions';

const AuthenticateUser = ({ dispatch }) => {
  const login = e => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('dispatch login');
    dispatch(loginUser(1));
  };

  const register = e => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('dispatch register');
    dispatch(registerUser(2));
  };

  return <Authentication onLoginSubmit={login} onRegisterSubmit={register} />;
};

AuthenticateUser.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AuthenticateUser);
