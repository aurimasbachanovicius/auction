import React from 'react';
import { Grid } from '@material-ui/core';
import ItemBlock from '../components/Items/ItemBlock/ItemBlock';

const ItemsPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item md={9}>
          <ItemBlock />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemsPage;
