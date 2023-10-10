import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [categoryFilters, setCategoryFilters] = useState([   
    // Add categories as needed    
    // 'laptops',
    // 'fragrances',
  ]);
  const [priceFilter, setPriceFilter] = useState(1800);

  const [priceRange_Filter, setPriceRange_Filter] = useState({ min: "", max: "" });

  const [sortOrder, setSortOrder] = useState('asc');


  
  // 🍀applyFilters 👉 button generate
  // input으로 filter된 const들을 set~~ state를 통해서 수정함
  const applyFilters = ({ categories, maxPrice, sortOrder }) => {
    setCategoryFilters(categories);
    setPriceFilter(maxPrice);
    setSortOrder(sortOrder);
    // minPrice: priceRange_Filter.min,
    // maxPrice: priceRange_Filter.max,
  };


  // 🍀 js112 renderResults
  const [renderResults, setRenderResults] = useState(true);

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,setCategoryFilters,
        priceFilter,setPriceFilter,
        priceRange_Filter, setPriceRange_Filter,
        sortOrder,setSortOrder,
        applyFilters,
        renderResults, setRenderResults,
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
