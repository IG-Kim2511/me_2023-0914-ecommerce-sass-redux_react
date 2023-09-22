import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  // Use destructuring to get the "id" parameter from the URL
  const { id } = useParams();

  return (
    <div id='product'>Product {id}</div>
  );
};

export default Product;
