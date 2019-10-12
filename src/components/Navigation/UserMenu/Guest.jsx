import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const Guest = () => {
  const classes = useStyles();

  return (
    <Link to="/signup">
      <Button variant="outlined" color="primary" size="medium" className={classes.margin}>
        Prisijungti
      </Button>
    </Link>
  );
};

export default Guest;
