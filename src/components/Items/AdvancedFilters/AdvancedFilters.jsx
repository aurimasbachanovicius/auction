import React from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const AdvancedFilters = () => {
  const classes = useStyles();

  return (
    <Box>
      <FormControl className={classes.formControl}>
        <div>Advanced Filters</div>
      </FormControl>
    </Box>
  );
};

export default AdvancedFilters;
