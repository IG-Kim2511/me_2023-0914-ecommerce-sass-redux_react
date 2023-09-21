import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  // Use destructuring to get the "id" parameter from the URL
  const { id } = useParams();

  return (
    <div>Product {id}</div>
  );
};

export default Product;
