import React from 'react';
import { Grid } from '@material-ui/core';
import ItemOverview from 'components/Item/ItemOverview/ItemOverview';

const ItemsPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={0} justify="center">
        <Grid item md={8}>
          <ItemOverview />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemsPage;
