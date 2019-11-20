import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40
  },
  lightText: {
    color: '#636363',
    float: 'right'
  },
  biddingField: {
    border: '1px solid #e4e4e4',
    borderRadius: 4,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function ItemDescription() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.biddingField}>
        <Grid container spacing={2} className={classes.container}>
          <Grid item md={3}>
            <Typography className={classes.lightText} display="inline" component="p">
              Dabartinė kaina:
            </Typography>
          </Grid>
          <Grid item md={9}>
            <Typography className={classes.itemPrice} display="inline" variant="h4" component="h4">
              15.50 €
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}

export default ItemDescription;
