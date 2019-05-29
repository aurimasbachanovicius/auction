import React from 'react';
import ProductsSortingInput from '../ProductsSorting/ProductsSortingInput';
import ProductsListViewInput from '../ProductsListView/ProductsListViewInput';

const ProductsSettings = () => (
  <form className="form-inline">
    <ProductsSortingInput availableModes={['Recent', 'AnotherMode', 'ThirdMode']} />
    <ProductsListViewInput availableTypes={['Cards', 'List', 'Compacted']} />
  </form>
);

export default ProductsSettings;
