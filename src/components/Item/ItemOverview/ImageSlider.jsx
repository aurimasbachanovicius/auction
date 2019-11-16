import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

const imageSteps = [
  {
    label: 'Naujas medvilninis džemperis, M dydis',
    imgPath: '0'
  },
  {
    label: 'Naujas medvilninis džemperis, M dydis 1',
    imgPath: '1'
  },
  {
    label: 'Naujas medvilninis džemperis, M dydis 2',
    imgPath: '2'
  },
  {
    label: 'Naujas medvilninis džemperis, M dydis 3',
    imgPath: '3'
  },
  {
    label: 'Naujas medvilninis džemperis, M dydis 4',
    imgPath: '4'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    marginTop: 50
  },
  arrowButton: {
    padding: '50px 0',
    minWidth: 30
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 'auto',
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    paddingBottom: '10px'
  },
  thumbnail: {
    padding: '0 4px'
  }
}));

function ImageSlider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = imageSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSwitch = index => {
    setActiveStep(index);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0} justify="center" alignItems="center">
        <Grid item xs={1}>
          <Button
            className={classes.arrowButton}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight fontSize="large" />
            ) : (
              <KeyboardArrowLeft fontSize="large" />
            )}
          </Button>
        </Grid>
        <Grid item xs={10}>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imageSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={require(`assets/items/${step.imgPath}.png`)}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
        </Grid>
        <Grid item xs={1}>
          <Button
            className={classes.arrowButton}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft fontSize="large" />
            ) : (
              <KeyboardArrowRight fontSize="large" />
            )}
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={0} justify="center" alignItems="center">
        {imageSteps.map((step, index) => (
          <div key={step.label}>
            <Grid item xs={3}>
              <Button className={classes.thumbnail} onClick={() => handleSwitch(index)}>
                {Math.abs(activeStep - index) <= 4 ? (
                  <img
                    src={require(`assets/items/${step.imgPath}.png`)}
                    alt={step.label}
                    style={{ height: '80px' }}
                  />
                ) : null}
              </Button>
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
}

export default ImageSlider;
