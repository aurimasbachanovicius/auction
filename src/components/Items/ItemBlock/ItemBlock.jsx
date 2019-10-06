import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Settings from '../Settings/Settings';
import ItemCard from '../ItemCard/ItemCard';

const ItemBlock = () => {
  const items = [];
  for (let i = 0; i < 2; i += 1) {
    items.push(
      <Box mt={4} key={i}>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <ItemCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
          </Grid>
          <Grid item md={6}>
            <ItemCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <div>
      <Settings />
      {items}
    </div>
  );
};

export default ItemBlock;
