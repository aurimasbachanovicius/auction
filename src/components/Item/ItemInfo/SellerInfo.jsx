import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    padding: 40,
    border: '1px solid #e4e4e4',
    borderRadius: 4
  },
  boldText: {
    fontWeight: 500
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 4
  }
}));

function ItemDescription() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item style={{ marginBottom: 30 }}>
          <Typography className={classes.boldText} display="inline" variant="h4" component="h4">
            Pardavėjas(-a)
          </Typography>
        </Grid>
        <Grid item style={{ marginBottom: 20 }}>
          <LocationOnIcon />
          <Typography style={{ paddingLeft: 10, verticalAlign: 6 }} display="inline" component="p">
            J. Jasinskio g. 15, Vilnius
          </Typography>
          <div style={{ paddingLeft: 32 }}>
            <a
              href="https://www.google.com/maps/dir//J.+Jasinskio+g.+15,+Vilnius+01111,+Lithuania/@54.6887771,25.2591619,17z/data=!4m17!1m7!3m6!1s0x46dd9409ebcb5afb:0x3da63ea8001c614c!2sJ.+Jasinskio+g.+15,+Vilnius+01111,+Lithuania!3b1!8m2!3d54.688774!4d25.2613559!4m8!1m0!1m5!1m1!1s0x46dd9409ebcb5afb:0x3da63ea8001c614c!2m2!1d25.2613559!2d54.688774!3e2"
              style={{ color: '#0b409c' }}
            >
              Gauti nuorodas
            </a>
          </div>
        </Grid>
        <Grid item style={{ marginBottom: 20 }}>
          <PersonIcon />
          <Typography style={{ paddingLeft: 10, verticalAlign: 6 }} display="inline" component="p">
            Agne123
          </Typography>
          <div style={{ paddingLeft: 32 }}>
            <a href="/#" style={{ color: '#0b409c' }}>
              Rašyti laišką
            </a>
          </div>
        </Grid>
        <Grid item>
          <img
            alt="Google maps placeholder"
            className={classes.img}
            src={require(`assets/temp/google-maps-placeholder.png`)}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ItemDescription;
