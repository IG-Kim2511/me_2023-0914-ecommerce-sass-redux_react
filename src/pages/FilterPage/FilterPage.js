import React from 'react';

import { useFilter } from '../../context/FilterContext';
import products from '../../data' // Replace with your product data source
import ProductCard from './ProductCard';

function FilterPage() {
  const {
    categoryFilters,
    priceFilter,
    sortOrder,
    applyFilters,
  } = useFilter();

  // Apply filters to products
  const filteredProducts = products
    .filter(product => (
      categoryFilters.length === 0 || categoryFilters.includes(product.category)
    ))
    .filter(product => product.price <= priceFilter)
    .sort((a, b) => (
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    ));

  return (
    <div>
      {/* Render filter inputs here */}
      {/* For example, input radio, checkbox, range, search */}
      
      {/* Render filtered products */}
      <ul className="bottom">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default FilterPage;
