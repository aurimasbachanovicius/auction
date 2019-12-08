import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Grid, Box } from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';
import AuthenticateUser from 'containers/AuthenticateUser';
import RegisterUser from 'containers/RegisterUser';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';

const styles = {
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
  },
  horizontalBorder: {
    paddingTop: 15,
    marginBottom: 15,
    borderBottom: '1px solid #e4e4e4',
    width: '45%'
  }
};

class AuthPage extends React.Component {
  state = {
    showRegisterUser: false
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={0} justify="center">
          <Grid item md={1} />
          <Grid item md={4} className={classes.loginRegisterFields}>
            <Typography variant="h5" component="h3" style={{ marginBottom: 15, marginTop: 4 }}>
              Prisijungti
            </Typography>
            <Grid container spacing={2} justify="center" style={{ marginTop: 15 }}>
              <Grid item md={12}>
                <Button variant="contained" color="primary" fullWidth>
                  <FacebookIcon style={{ marginRight: 10 }} />
                  Prisijungti per Facebook
                </Button>
              </Grid>
              <Grid item md={12}>
                <Button variant="outlined" color="default" fullWidth>
                  <ThumbUp style={{ marginRight: 10 }} />
                  Prisijungti per Google
                </Button>
              </Grid>
            </Grid>
            <Box display="flex" style={{ marginTop: 15, marginBottom: 7 }}>
              <Box component="span" className={classes.horizontalBorder}></Box>
              <Typography component="p" style={{ padding: '2px 18px 0 18px' }}>
                arba
              </Typography>
              <Box component="span" className={classes.horizontalBorder}></Box>
            </Box>
            <AuthenticateUser />
          </Grid>
          <Grid item md={1} className={classes.verticalBorder} />
          <Grid item md={1} />
          <Grid item md={4} className={classes.loginRegisterFields}>
            <Typography variant="h5" component="h3" style={{ marginBottom: 15 }}>
              Registruotis
            </Typography>
            {this.state.showRegisterUser ? null : (
              <React.Fragment>
                <Grid container spacing={2} justify="center" style={{ marginTop: 15 }}>
                  <Grid item md={12}>
                    <Button variant="contained" color="primary" fullWidth>
                      <FacebookIcon style={{ marginRight: 10 }} />
                      Tęsti per Facebook
                    </Button>
                  </Grid>
                  <Grid item md={12}>
                    <Button variant="outlined" color="default" fullWidth>
                      <ThumbUp style={{ marginRight: 10 }} />
                      Tęsti per Google
                    </Button>
                  </Grid>
                </Grid>
                <Box display="flex" style={{ marginTop: 15, marginBottom: 15 }}>
                  <Box component="span" className={classes.horizontalBorder}></Box>
                  <Typography component="p" style={{ padding: '2px 18px 0 18px' }}>
                    arba
                  </Typography>
                  <Box component="span" className={classes.horizontalBorder}></Box>
                </Box>

                <Button
                  variant="outlined"
                  color="default"
                  onClick={() => this.setState({ showRegisterUser: true })}
                  fullWidth
                >
                  <MailOutlineIcon style={{ marginRight: 10 }} />
                  Naudoti el. paštą
                </Button>
              </React.Fragment>
            )}
            {this.state.showRegisterUser ? (
              <Box style={{ marginTop: 15 }}>
                <RegisterUser />
              </Box>
            ) : null}
          </Grid>
          <Grid item md={1} />
        </Grid>
      </React.Fragment>
    );
  }
}

AuthPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthPage);
