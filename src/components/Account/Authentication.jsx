import React from 'react';
import { Grid } from '@material-ui/core';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';
import Register from './Register/Register';
import AuthenticateUser from '../../containers/AuthenticateUser';

function Authentication() {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item md={6}>
          Connect to use per socials:
        </Grid>
        <Grid item md={6}>
          <Button variant="contained" color="primary" fullWidth>
            <ThumbUp style={{ left: 40, position: 'absolute' }} />
            Facebook
          </Button>
          <Button variant="contained" color="default" fullWidth style={{ marginTop: 15 }}>
            <ThumbUp style={{ left: 40, position: 'absolute' }} />
            Twitter
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: 15 }}>
        <Grid item md={6}>
          <AuthenticateUser />
        </Grid>
        <Grid item md={6}>
          <h3>Not a user yet? Register now!</h3>
          <br />
          <Register onSubmit={() => ({})} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Authentication;
