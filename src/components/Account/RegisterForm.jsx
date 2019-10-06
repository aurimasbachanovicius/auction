import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const RegisterForm = ({ onSubmit, children }) => (
  <form noValidate onSubmit={onSubmit}>
    {children}
    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
    <Button type="submit" fullWidth variant="contained" color="primary">
      Register
    </Button>
  </form>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default RegisterForm;
