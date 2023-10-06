import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [categoryFilters, setCategoryFilters] = useState([   
    // Add categories as needed    
    // 'laptops',
    // 'fragrances',
  ]);
  const [priceFilter, setPriceFilter] = useState(1800);
  const [sortOrder, setSortOrder] = useState('asc');

  const applyFilters = ({ categories, maxPrice, sortOrder }) => {
    setCategoryFilters(categories);
    setPriceFilter(maxPrice);
    setSortOrder(sortOrder);
  };

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,setCategoryFilters,
        priceFilter,setPriceFilter,
        sortOrder,setSortOrder,
        applyFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

// useFilterContext
export function useFilterContext() {
  return useContext(FilterContext);
}
