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


  
  // 🍀applyFilters 👉 button generate
  // input으로 filter된 const들을 set~~ state를 통해서 수정함
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
