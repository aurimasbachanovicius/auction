import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40,
    marginRight: theme.spacing(3)
  },
  itemTitle: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottom: '1px solid #e4e4e4'
  },
  lightText: {
    color: '#636363',
    float: 'right'
  },
  itemPrice: {
    fontWeight: 500
  },
  textField: {
    maxWidth: 120
  }
}));

function ItemDescription() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: ''
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.itemTitle} variant="h5" component="h3">
        Naujas medvilninis džemperis, M dydis
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Typography className={classes.lightText} display="inline" component="p">
            Aprašymas:
          </Typography>
        </Grid>
        <Grid item md={9}>
          <Typography display="inline" component="p">
            Parduodu džemperį M dydžio, moteriškas. Atsiimti galite Vilniuje, su aukciono laimėtoju
            susisieksiu asmeniškai per el. paštą, susitarti dėl atsiėmimo. Į kitus miestus
            nesiunčiu.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Typography className={classes.lightText} display="inline" component="p">
            Būklė:
          </Typography>
        </Grid>
        <Grid item md={9}>
          <Typography display="inline" component="p">
            Naujas
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Typography className={classes.lightText} display="inline" component="p">
            Liko laiko:
          </Typography>
        </Grid>
        <Grid item md={9}>
          <Typography display="inline" component="p">
            999 h
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Typography className={classes.lightText} display="inline" component="p">
            Dabartinė kaina:
          </Typography>
        </Grid>
        <Grid item md={9}>
          <Typography className={classes.itemPrice} display="inline" variant="h4" component="h4">
            9999.99 €
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3}></Grid>
        <Grid item md={9}>
          <FormControl variant="outlined">
            <OutlinedInput
              id="outlined-adornment-amount"
              className={classes.textField}
              value={values.amount}
              onChange={handleChange('amount')}
              endAdornment={<InputAdornment position="end">€</InputAdornment>}
              aria-describedby="outlined-amount"
              inputProps={{
                'aria-label': 'amount'
              }}
              labelWidth={0}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ItemDescription;
