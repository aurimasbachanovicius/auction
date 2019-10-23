import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '2rem',
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  slider: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(1)
  },
  textField: {
    width: 60
  }
}));

const PriceRange = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleSliderChange = (event, newValue) => setValue(newValue);

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4" component="h4">
        Kaina
      </Typography>
      <Slider
        className={classes.slider}
        value={value}
        color="secondary"
        onChange={handleSliderChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
      />
    </div>
  );
};

export default PriceRange;
