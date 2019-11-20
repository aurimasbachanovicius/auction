import React from 'react';
import { Grid } from '@material-ui/core';
import ImageCarousel from 'components/Item/ItemInfo/ImageCarousel';
import ItemDescription from 'components/Item/ItemInfo/ItemDescription';
import MapAndContact from 'components/Item/ItemInfo/MapAndContact';

const ItemsPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={0} justify="center">
        <Grid item md={3}>
          <ImageCarousel />
        </Grid>
        <Grid item md={6}>
          <ItemDescription />
        </Grid>
        <Grid item md={3}>
          <MapAndContact />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemsPage;
