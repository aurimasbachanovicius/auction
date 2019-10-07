import React from 'react';
import LoggedIn from './LoggedIn';
import Guest from './Guest';

const UserMenu = () => {
  const userLoggedIn = false;

  return userLoggedIn ? <LoggedIn /> : <Guest />;
};

export default UserMenu;
