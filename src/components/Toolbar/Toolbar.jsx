import React from 'react';

import PropTypes from 'prop-types';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = ({ drawerClickHandler }) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
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
      </div>
    </nav>
  </header>
);

toolbar.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
};

export default toolbar;