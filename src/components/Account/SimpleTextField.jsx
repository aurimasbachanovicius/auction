import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const SimpleTextField = ({ submitted, name, value, label, onChange }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    value={value}
    label={label}
    name={name}
    autoComplete={name}
    autoFocus
    onChange={onChange}
    error={submitted && !value}
    helperText={submitted && !value && 'Privalomas laukas'}
  />
);

SimpleTextField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SimpleTextField;
