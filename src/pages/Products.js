import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  // Use destructuring to get the "id" parameter from the URL
  const { id } = useParams();

  return (
    <div id='product'>Products {id}</div>
  );
};

export default Products;
