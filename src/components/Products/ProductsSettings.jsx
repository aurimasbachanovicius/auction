import React from 'react';
import ProductsSortingInput from './ProductsSortingInput';
import ProductsListViewInput from './ProductsListViewInput';

const ProductsSettings = () => (
  <form className="form-inline">
    <ProductsSortingInput availableModes={['Recent', 'AnotherMode', 'ThirdMode']} />
    <ProductsListViewInput availableTypes={['Cards', 'List', 'Compacted']} />
  </form>
);

export default ProductsSettings;
