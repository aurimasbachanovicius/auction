import React from 'react';
import { Grid } from '@material-ui/core';
import ItemList from 'components/Item/ItemList/ItemList';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AdvancedFilters from 'components/Item/AdvancedFilters/AdvancedFilters';

const useStyles = makeStyles(theme => ({
  advancedFilters: {
    right: 'auto',
    left: 0,
    position: 'fixed',
    height: '100%',
    marginLeft: '2rem'
  }
}));

const ItemsPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={0} justify="flex-end">
        <Grid item md={2} className={classes.advancedFilters}>
          <AdvancedFilters />
        </Grid>
        <Grid item md={10}>
          <ItemList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemsPage;
