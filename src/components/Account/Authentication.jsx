import React from 'react';
import { Grid } from '@material-ui/core';
import Login from './Login/Login';
import Register from './Register/Register';

function Authentication() {
  return (
    <Grid container spacing={4}>
      <Grid item md={6}>
        {Login}
      </Grid>
      <Grid item md={6}>
        <h3>Not a user yet? Register now!</h3>
        <br />
        {Register}
      </Grid>
    </Grid>
  );
}

export default Authentication;
