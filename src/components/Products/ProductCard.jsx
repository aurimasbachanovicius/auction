import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.css';

const ProductCard = ({ currentBid, itemName, timeUntilBidEnd }) => (
  <div className="card">
    <img className="card-img-top" src="https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2018/10/placeholder.jpg?ssl=1" alt="placeholder" />
    <div className="card-body">
      <h5 className="card-title">{itemName}</h5>
      <p className="card-text">
        <span style={styles.infoBlock}>{`Current: ${currentBid} Eur`}</span>
        <span style={styles.infoBlock}>{`End after: ${timeUntilBidEnd} Hour`}</span>
      </p>

      <form className="form-inline">
        <div className="input-group" style={styles.fullWidth}>
          <input type="text" className="form-control rounded-0" />
          <a href="?=a" className="btn btn-primary rounded-0">Bid</a>
        </div>
      </form>
    </div>
  </div>
);

ProductCard.propTypes = {
  currentBid: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  timeUntilBidEnd: PropTypes.number.isRequired,
};

export default ProductCard;
