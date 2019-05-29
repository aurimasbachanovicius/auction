import React from 'react';
import Settings from './Settings';
import ProductCard from './ProductCard';

const ProductsBlock = () => {
  const products = [];
  for (let i = 0; i < 3; i += 1) {
    products.push(
      <div className="mt-4 row">
        <div className="col">
          <ProductCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
        </div>
        <div className="col">
          <ProductCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
        </div>
        <div className="col">
          <ProductCard timeUntilBidEnd={10000} itemName="test" currentBid={10.15} />
        </div>
      </div>,
    );
  }

  return (
    <div>
      <Settings />
      {products}
    </div>
  );
};

export default ProductsBlock;
