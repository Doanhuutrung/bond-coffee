import React from 'react';
import ProductCard from './ProductCard';

const Products = ({data}) => {
  return (
    <>
      {data.map((item, pos) => (
        <ProductCard item={item} key={pos} />
      ))}
    </>
  );
};

export default Products;