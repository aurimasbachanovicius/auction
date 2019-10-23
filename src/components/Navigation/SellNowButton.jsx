import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
    // '&:hover': {
    //   backgroundColor: 'primary'
    // }
  }
}));

const SellNowButton = () => {
  const classes = useStyles();

  const link = 'signup';

  return (
    <Link to={link}>
      <Button variant="contained" color="primary" size="medium" className={classes.button}>
        Parduoti
      </Button>
    </Link>
  );
};

export default SellNowButton;
