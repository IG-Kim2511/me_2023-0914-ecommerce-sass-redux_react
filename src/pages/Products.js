import React from 'react';
import { useParams } from 'react-router-dom';
import FilteredProducts from '../components/FilteredProducts';

const Products = () => {
  // Use destructuring to get the "id" parameter from the URL
  const { id } = useParams();

  return (
    <div id='product'>

      <FilteredProducts category={id}/>


    </div>
  );
};

export default Products;
