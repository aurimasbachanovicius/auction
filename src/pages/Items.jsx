import React from 'react';
import { Grid } from '@material-ui/core';
import ItemList from '../components/Items/ItemList/ItemList';
import AdvancedFilters from '../components/Items/AdvancedFilters/AdvancedFilters';

const ItemsPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item md={2}>
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
