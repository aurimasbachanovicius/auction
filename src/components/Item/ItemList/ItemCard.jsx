import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

// import { PanTool } from '@material-ui/icons';
// import FormControl from '@material-ui/core/FormControl';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    border: '1px solid #e4e4e4'
  },
  media: {
    height: 0,
    width: '100%',
    paddingTop: '100%', // 1:1
    marginBottom: '.625rem'
  },
  itemDescriptionBold: {
    fontWeight: 400,
    textAlign: 'left',
    paddingRight: 0
  },
  itemFavorite: {
    color: '#999',
    '&:hover': {
      color: 'red'
    }
  }
});

const ItemCard = ({ currentBid, itemName, timeUntilBidEnd }) => {
  const classes = useStyles();
  const randomNumber = Math.floor(Math.random() * 14);

  const link = 'item';

  return (
    <Card className={classes.card}>
      <Link to={link}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require(`../../../assets/items/${randomNumber}.png`)}
            title="Clothes placeholder"
          />
        </CardActionArea>
      </Link>
      <CardContent>
        <Typography
          className={classes.itemDescriptionBold}
          gutterBottom
          variant="h4"
          component="h4"
        >
          {itemName}
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
      <Grid container direction="row" justify="space-between" alignItems="center">
        <CardContent>
          <Typography className={classes.itemDescriptionBold} variant="h4" component="h4">
            {`${currentBid} €`}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography color="textSecondary">{`${timeUntilBidEnd} h`}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton className={classes.itemFavorite} aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Grid>
    </Card>
  );
};

ItemCard.propTypes = {
  currentBid: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  timeUntilBidEnd: PropTypes.number.isRequired
};

export default ItemCard;
