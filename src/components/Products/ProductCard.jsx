import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styles from './ProductCard.css';

const useStyles = makeStyles({
  media: {
    height: 140
  }
});

const ProductCard = ({ currentBid, itemName, timeUntilBidEnd }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2018/10/placeholder.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {itemName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={styles.infoBlock}>{`Current: ${currentBid} Eur`}</span>
            <span style={styles.infoBlock}>{`End after: ${timeUntilBidEnd} Hour`}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <form className="form-inline">
          <div className="input-group" style={styles.fullWidth}>
            <input type="text" className="form-control rounded-0" />
            <a href="?=a" className="btn btn-primary rounded-0">
              Bid
            </a>
          </div>
        </form>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  currentBid: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  timeUntilBidEnd: PropTypes.number.isRequired
};

export default ProductCard;
