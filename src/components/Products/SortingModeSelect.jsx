import React from 'react';
import PropTypes from 'prop-types';

const SortingModeSelect = ({ availableModes }) => (
  <div className="form-group">
    <select className="form-control">
      {availableModes.map(mode => (
        <option>{mode}</option>
      ))}
    </select>
  </div>
);

SortingModeSelect.propTypes = {
  availableModes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SortingModeSelect;
