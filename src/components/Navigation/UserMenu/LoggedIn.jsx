import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const LoggedIn = () => {
  const classes = useStyles();

  return (
    <div>
      <Box m={1}>
        <Button variant="outlined" color="primary" size="medium" className={classes.margin}>
          Mano profilis
        </Button>
      </Box>
    </div>
  );
};

export default LoggedIn;
