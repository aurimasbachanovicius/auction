import React from 'react';
// import { Grid } from '@material-ui/core';
import ImageSlider from 'components/Item/ItemOverview/ImageSlider';

const ItemsPage = () => {
  return (
    <React.Fragment>
      <ImageSlider />
      {/* <Grid container spacing={0} justify="center">
        <Grid item md={4}>
          <ImageSlider />
        </Grid>
        <Grid item md={4}></Grid>
        <Grid item md={4}></Grid>
      </Grid> */}
    </React.Fragment>
  );
};

export default ItemsPage;
