import React from 'react';
import PropTypes from 'prop-types';

const ProductsListViewInput = ({ availableTypes }) => (
  <div className="form-group mx-sm-3">
    <select className="form-control">
      {availableTypes.map(type => (
        <option>{type}</option>
      ))}
    </select>
  </div>
);

ProductsListViewInput.propTypes = {
  availableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductsListViewInput;
