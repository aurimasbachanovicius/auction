import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoggedIn from '../components/Navigation/UserMenu/LoggedIn';
import Guest from '../components/Navigation/UserMenu/Guest';

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
