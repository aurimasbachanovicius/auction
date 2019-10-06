import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({ submitted, value, name, onChange }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    value={value}
    name={name}
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    onChange={onChange}
    error={submitted && !value}
    helperText={submitted && !value && 'Privalomas laukas'}
  />
);

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired
};

export default PasswordInput;
