import React from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Categories from './Categories';
import PriceRange from './PriceRange';

const useStyles = makeStyles(theme => ({
  formControl: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    width: '100%',
    minWidth: 120,
    borderBottom: '1px solid #e4e4e4',
    borderRight: '1px solid #e4e4e4'
  }
}));

const AdvancedFilters = () => {
  const classes = useStyles();

  return (
    <Box>
      <FormControl className={classes.formControl}>
        <Categories />
      </FormControl>
      <FormControl className={classes.formControl}>
        <PriceRange />
      </FormControl>
    </Box>
  );
};

export default AdvancedFilters;
