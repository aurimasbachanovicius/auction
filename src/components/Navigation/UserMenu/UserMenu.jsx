import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoggedIn from './LoggedIn';
import Guest from './Guest';

const UserMenu = ({ loggedIn }) => {
  return loggedIn ? <LoggedIn /> : <Guest />;
};

UserMenu.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const { loggedIn } = state.userAuthentication;

  return { loggedIn };
}

export default connect(mapStateToProps)(UserMenu);
