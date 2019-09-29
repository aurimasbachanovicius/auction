import React from 'react';
import { Grid } from '@material-ui/core';
import './index.css';
import ProductBlock from '../Products/ProductBlock';
// import PopularSearches from '../PopularSearches';

const Homepage = () => {
  return (
    <React.Fragment>
      {/* <PopularSearches searches={['popular search 1', 'popular search 2', 'popular search 3']} /> */}
      <Grid container spacing={4}>
        <Grid item md={9}>
          <ProductBlock />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Homepage;
