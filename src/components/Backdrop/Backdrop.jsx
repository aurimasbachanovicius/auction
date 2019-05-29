import React from 'react';

import './Backdrop.css';
import PropTypes from 'prop-types';

const backdrop = ({ click }) => <div role="presentation" className="backdrop" onClick={click} />;

backdrop.propTypes = {
  click: PropTypes.func.isRequired,
};

export default backdrop;
