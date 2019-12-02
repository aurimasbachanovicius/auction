import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Grid } from '@material-ui/core';
import AuthenticateUser from 'containers/AuthenticateUser';
import RegisterUser from 'containers/RegisterUser';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  loginRegisterFields: {
    marginTop: 26,
    padding: 40,
    backgroundColor: '#fff',
    border: '1px solid #e4e4e4',
    borderRadius: 4,
    height: 'fit-content'
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
        <Grid item md={1} />
        <Grid item md={4} className={classes.loginRegisterFields}>
          <Typography variant="h5" component="h3" style={{ marginBottom: 15, marginTop: 4 }}>
            Prisijungti
          </Typography>
          <AuthenticateUser />
        </Grid>
        <Grid item md={1} className={classes.verticalBorder} />
        <Grid item md={1} />
        <Grid item md={4} className={classes.loginRegisterFields}>
          <Typography variant="h5" component="h3" style={{ marginBottom: 15 }}>
            Registruotis
          </Typography>
          <RegisterUser />
        </Grid>
        <Grid item md={1} />
      </Grid>
    </React.Fragment>
  );
}

export default AuthPage;
