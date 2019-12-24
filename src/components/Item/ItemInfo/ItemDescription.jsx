import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    '@media (min-width: 770px)': {
      marginLeft: theme.spacing(1)
    },
    padding: 30,
    border: '1px solid #e4e4e4',
    borderRadius: 4
  },
  fieldDescriptor: {
    float: 'right'
  },
  boldText: {
    fontWeight: 500
  },
  priceInputField: {
    maxWidth: 120,
    backgroundColor: '#fff'
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  biddingField: {
    borderRadius: 4,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: '#f9f9f9',
    border: '1px solid #ebebeb'
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
      <Typography variant="h5" component="h3">
        Naujas medvilninis džemperis, M dydis
      </Typography>
      <div className={classes.biddingField}>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Typography className={classes.fieldDescriptor} display="inline" component="p">
              Liko laiko:
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Typography display="inline" component="p">
              1 d 15 h
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <Typography className={classes.fieldDescriptor} display="inline" component="p">
              Dabartinė kaina:
            </Typography>
          </Grid>
          <Grid item md={8}>
            <Typography className={classes.boldText} display="inline" variant="h4" component="h4">
              15.50 €
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={4}></Grid>
          <Grid item md={8}>
            <FormControl variant="outlined">
              <OutlinedInput
                id="outlined-adornment-amount"
                className={classes.priceInputField}
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
            <Button variant="contained" color="primary" size="medium" className={classes.button}>
              Siūlyti kainą
            </Button>
          </Grid>
        </Grid>
      </div>
      <Typography display="inline" component="p">
        Parduodu džemperį M dydžio, moteriškas. Atsiimti galite Vilniuje, su aukciono laimėtoju
        susisieksiu asmeniškai per el. paštą, susitarti dėl atsiėmimo. Į kitus miestus nesiunčiu.
      </Typography>
    </Paper>
  );
}

export default ItemDescription;
