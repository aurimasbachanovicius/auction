import React from 'react';
import { Grid } from '@material-ui/core';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Login from './Login/Login';
import Register from './Register/Register';

function Authentication({ onLoginSubmit, onRegisterSubmit }) {
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
          <Login onSubmit={onLoginSubmit} />
        </Grid>
        <Grid item md={6}>
          <h3>Not a user yet? Register now!</h3>
          <br />
          <Register onSubmit={onRegisterSubmit} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Authentication.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
  onRegisterSubmit: PropTypes.func.isRequired
};

export default Authentication;
