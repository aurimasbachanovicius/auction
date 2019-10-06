import React from 'react';
import LoggedIn from './LoggedIn/LoggedIn';
import Guest from './Guest/Guest';

const UserMenu = () => {
  const userLoggedIn = false;

  return userLoggedIn ? <LoggedIn /> : <Guest />;
};

export default UserMenu;
