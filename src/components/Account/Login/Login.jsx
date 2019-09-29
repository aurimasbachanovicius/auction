import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ onSubmit }) => (
  <form noValidate onSubmit={onSubmit}>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
    <Button type="submit" fullWidth variant="contained" color="primary">
      Login
    </Button>
    <Grid container style={{ marginTop: 15 }}>
      <Grid item xs>
        <Link to="/signup/remember-password" variant="body2">
          Forgot password?
        </Link>
      </Grid>
    </Grid>
  </form>
);

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Login;
