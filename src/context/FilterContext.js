import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [categoryFilters, setCategoryFilters] = useState([
    'smartphones', // Add all your possible categories here
    'laptops',
    'fragrances',
    // Add more categories as needed
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
        categoryFilters,
        priceFilter,
        sortOrder,
        applyFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
