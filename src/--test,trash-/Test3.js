import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [categoryFilters, setCategoryFilters] = useState([]);

  const [priceFilter, setPriceFilter] = useState({ min: "", max: "" });
  
  const [sortOrder, setSortOrder] = useState("asc");

  // ... other filter-related code ...

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        priceFilter,
        setPriceFilter,
        sortOrder,
        setSortOrder,
        applyFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
