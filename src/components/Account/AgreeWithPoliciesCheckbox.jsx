import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const AgreeWithPoliciesCheckbox = ({ checked }) => (
  <FormControlLabel
    control={<Checkbox value="agree-with-policies" checked={checked} color="primary" />}
    label="Sutinku su salygumos"
  />
);

AgreeWithPoliciesCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired
};

export default AgreeWithPoliciesCheckbox;
