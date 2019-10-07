import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const RegisterForm = ({ onSubmit, children }) => (
  <form noValidate onSubmit={onSubmit}>
    {children}
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
