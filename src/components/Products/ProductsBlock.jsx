import React from 'react';
import Grid from '@material-ui/core/Grid';
import Settings from './Settings';
import ProductCard from './ProductCard';

const ProductsBlock = () => {
  const products = [];
  for (let i = 0; i < 3; i += 1) {
    products.push(
      <Grid container spacing={3}>
        <Grid item>
          <ProductCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
        </Grid>
        <Grid item>
          <ProductCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
        </Grid>
        <Grid item>
          <ProductCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
        </Grid>
      </Grid>
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
