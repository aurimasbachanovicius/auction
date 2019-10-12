import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: theme.spacing(1)
  },
  slider: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1)
  },
  textField: {
    width: 70
  }
}));

// function valueText(value) {
//   return `${value}`;
// }

const PriceRange = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" component="h4">
        Kaina
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Slider
            className={classes.slider}
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            className={classes.textField}
            value={value[0]}
            margin="dense"
            variant="outlined"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider'
            }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <TextField
            className={classes.textField}
            value={value[1]}
            margin="dense"
            variant="outlined"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider'
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PriceRange;
