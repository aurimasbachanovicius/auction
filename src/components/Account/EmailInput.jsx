import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';

const EmailInput = ({ submitted, value, onChange }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    value={value}
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
    onChange={onChange}
    error={submitted && !value}
    helperText={submitted && !value && 'Privalomas laukas'}
  />
);

EmailInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired
};

export default EmailInput;
