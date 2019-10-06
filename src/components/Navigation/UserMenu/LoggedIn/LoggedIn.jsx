import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge/Badge';
import NotificationsIcon from '@material-ui/core/SvgIcon/SvgIcon';
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
      <IconButton aria-label="Show new notifications" color="rgba(0, 0, 0, 0.54)">
        <Badge badgeContent={2} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Box m={1}>
        <Button variant="outlined" color="primary" size="medium" className={classes.margin}>
          My Account
        </Button>
      </Box>
    </div>
  );
};

export default LoggedIn;
