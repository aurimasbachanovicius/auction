import React from 'react';
import { Grid } from '@material-ui/core';
import ImageCarousel from 'components/Item/ItemInfo/ImageCarousel';
import ItemDescription from 'components/Item/ItemInfo/ItemDescription';
import SellerInfo from 'components/Item/ItemInfo/SellerInfo';

const ItemsPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={0} justify="center">
        <Grid item md={4}>
          <ImageCarousel />
        </Grid>
        <Grid item md={5}>
          <ItemDescription />
        </Grid>
        <Grid item md={3}>
          <SellerInfo />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemsPage;
