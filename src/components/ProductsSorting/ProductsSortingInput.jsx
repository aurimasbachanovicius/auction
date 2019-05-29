import React from 'react';
import PropTypes from 'prop-types';

const ProductsSortingInput = ({ availableModes }) => (
  <div className="form-group">
    <select className="form-control">
      {availableModes.map(mode => (
        <option>{mode}</option>
      ))}
    </select>
  </div>
);

ProductsSortingInput.propTypes = {
  availableModes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductsSortingInput;
