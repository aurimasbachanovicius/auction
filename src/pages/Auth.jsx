import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid } from '@material-ui/core';
import AuthenticateUser from 'containers/AuthenticateUser';
import Socials from 'components/Account/Socials';
import RegisterUser from 'containers/RegisterUser';

const useStyles = makeStyles(theme => ({
  loginRegisterFields: {
    marginTop: 26,
    padding: 40,
    backgroundColor: '#fff',
    border: '1px solid #e4e4e4',
    borderRadius: 4
  },
  verticalBorder: {
    marginTop: 26,
    borderRight: '1px solid #e4e4e4',
    height: 200,
    display: 'flex',
    alignSelf: 'center'
  }
}));

function AuthPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <Grid container spacing={4}>
        <Grid item md={6}>
          Prisijungti per soc. tinklus:
        </Grid>
        <Grid item md={6}>
          <Socials />
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: 15 }}>
        <Grid item md={6}>
          <AuthenticateUser />
        </Grid>
        <Grid item md={6}>
          <h3>Not a user yet? Register now!</h3>
          <br />
          <RegisterUser />
        </Grid>
      </Grid> */}
      <Grid container spacing={0} justify="center">
        <Grid item md={1}></Grid>
        <Grid item md={4} className={classes.loginRegisterFields}>
          <AuthenticateUser />
        </Grid>
        <Grid item md={1} className={classes.verticalBorder}></Grid>
        <Grid item md={1}></Grid>
        <Grid item md={4} className={classes.loginRegisterFields}>
          <RegisterUser />
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AuthPage;
