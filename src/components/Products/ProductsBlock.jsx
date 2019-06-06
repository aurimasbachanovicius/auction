import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ProductCard from './ProductCard';
import Settings from './Settings';

const ProductsBlock = () => {
  const products = [];
  for (let i = 0; i < 2; i += 1) {
    products.push(
      <Box mt={4}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <ProductCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
          </Grid>
          <Grid item md={6}>
            <ProductCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
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

export default ProductsBlock;
