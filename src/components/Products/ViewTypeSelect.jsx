import React from 'react';
import PropTypes from 'prop-types';

const ViewTypeSelect = ({ availableTypes }) => (
  <div className="form-group mx-sm-3">
    <select className="form-control">
      {availableTypes.map(type => (
        <option>{type}</option>
      ))}
    </select>
  </div>
);

ViewTypeSelect.propTypes = {
  availableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ViewTypeSelect;
