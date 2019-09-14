import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Settings from '../Settings';

const ProductBlock = () => {
  const products = [];
  for (let i = 0; i < 2; i += 1) {
    products.push(
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Settings timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
          </Grid>
          <Grid item md={6}>
            <Settings timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <div>
      <Settings />
      {products}
    </div>
  );
};

export default ProductBlock;
