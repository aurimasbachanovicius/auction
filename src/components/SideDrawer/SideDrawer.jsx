import React from 'react';

import PropTypes from 'prop-types';
import './SideDrawer.css';

const sideDrawer = ({ show }) => {
  let drawerClasses = 'side-drawer';
  if (show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/">Register</a>
        </li>
        <li>
          <a href="/">Current Bids</a>
        </li>
      </ul>
    </nav>
  );
};

sideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default sideDrawer;
