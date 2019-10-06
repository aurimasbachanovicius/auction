import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';

// import { PanTool } from '@material-ui/icons';
// import FormControl from '@material-ui/core/FormControl';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    border: '1px solid #e4e4e4'
  },
  media: {
    height: 0,
    width: '100%',
    paddingTop: '100%' // 1:1
  }
});

const ItemCard = ({ currentBid, itemName, timeUntilBidEnd }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2018/10/placeholder.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {itemName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="ul">
          <Box component="li">{`Current: ${currentBid} €`}</Box>
          <Box component="li">{`End after: ${timeUntilBidEnd} Hour`}</Box>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <FormControl fullWidth>
          <Grid container spacing={2}>
            <Grid item md={8}>
              <TextField fullWidth id="your-bid" variant="outlined" label="Your bid" />
            </Grid>
            <Grid item md={4}>
              <Box mt={0.5}>
                <Button color="primary" fullWidth variant="contained" size="large">
                  <Box mr={2} component={PanTool} />
                  Bid
                </Button>
              </Box>
            </Grid>
          </Grid>
        </FormControl>
      </CardActions> */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

ItemCard.propTypes = {
  currentBid: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  timeUntilBidEnd: PropTypes.number.isRequired
};

export default ItemCard;
