import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Settings from '../Settings/Settings';
import ItemCard from './ItemCard/ItemCard';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(0),
    '@media (min-width: 1060px)': {
      paddingLeft: theme.spacing(3)
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    flexGrow: 1,
    minWidth: '100px',
    maxWidth: '100%',
    '@media (min-width: 450px)': {
      maxWidth: '50%'
    },
    '@media (min-width: 750px)': {
      maxWidth: '33%'
    },
    '@media (min-width: 1200px)': {
      maxWidth: '25%'
    },
    '@media (min-width: 1550px)': {
      maxWidth: '20%'
    }
  }
}));

const ItemList = () => {
  const classes = useStyles();
  const items = [];
  for (let i = 0; i < 14; i += 1) {
    items.push(
      <Grid item md={false} key={i} className={classes.item}>
        <ItemCard
          timeUntilBidEnd={10000}
          itemName="Naujas medvilninis džemperis, M dydis"
          currentBid={10.15}
        />
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <Settings />
      <Box mt={4}>
        <Grid container direction="row" spacing={2} className={classes.container}>
          {items}
        </Grid>
      </Box>
    </div>
  );
};

export default ItemList;
