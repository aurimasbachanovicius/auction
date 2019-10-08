import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Settings from '../Settings/Settings';
import ItemCard from './ItemCard/ItemCard';

const ItemList = () => {
  const items = [];
  for (let i = 0; i < 14; i += 1) {
    items.push(
      <Grid item md={false} key={i}>
        <ItemCard
          timeUntilBidEnd={10000}
          itemName="Naujas medvilninis džemperis, M dydis"
          currentBid={10.15}
        />
      </Grid>
    );
  }

  return (
    <div>
      <Settings />
      <Box mt={4}>
        <Grid container direction="row" spacing={3}>
          {items}
        </Grid>
      </Box>
    </div>
  );
};

export default ItemList;
