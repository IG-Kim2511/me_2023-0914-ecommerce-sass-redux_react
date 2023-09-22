import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryProducts from '../components/CategoryProducts';

const Products = () => {
  // Use destructuring to get the "id" parameter from the URL
  const { id } = useParams();

  return (
    <div id='product'>

      <CategoryProducts category={id}/>


    </div>
  );
};

export default Products;
