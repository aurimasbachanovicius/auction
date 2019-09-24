import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Register = (
  <form noValidate>
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
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="repeat-password"
      label="Repeat password"
      type="password"
      id="repeat-password"
      autoComplete="repeat-password"
    />
    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
    <Button type="submit" fullWidth variant="contained" color="primary">
      Register
    </Button>
  </form>
);

export default Register;
