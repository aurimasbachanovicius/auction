import React from 'react';
import { Grid } from '@material-ui/core';
import ProductBlock from '../components/Products/ProductBlock';

const ItemsPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item md={9}>
          <ProductBlock />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemsPage;
