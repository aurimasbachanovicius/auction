import React from 'react';
import { Grid } from '@material-ui/core';
import ProductBlock from '../Products/ProductBlock';

const Homepage = () => {
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

export default Homepage;
