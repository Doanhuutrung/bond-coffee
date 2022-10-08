import React from 'react';
import ProductCard from './ProductCard';

const Products = ({data}) => {
  return (
    <>
    {
        data.map(item=>(
            <ProductCard item={item}/>
        ))
    }
    </>
  )
}

export default Products